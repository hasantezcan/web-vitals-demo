import path from "node:path";
import fs from "node:fs";
import Fastify from "fastify";
import FastifyStatic from "@fastify/static";
import { build } from "vite";
import viteReactPlugin from "@vitejs/plugin-react";
import { renderToString } from "react-dom/server";
import React from "react";
import App from "../clientside/App";
import serialize from "serialize-javascript";
import { routes } from "./routes";
import axios from "axios";
import { ColorOptions, Product } from "../clientside/interfaces/product";
import { API_URL } from "../constants";
import { Banner } from "../clientside/interfaces/banner";
import { Suggestions } from "../clientside/interfaces/search-suggestions";

function buildClientSide() {
  return build({
    root: path.resolve(process.cwd(), "./src/clientside"),
    base: "/public",
    build: {
      emptyOutDir: true,
      outDir: path.resolve(process.cwd(), "./public"),
    },
    plugins: [viteReactPlugin()],
  });
}

async function buildReact(content: string) {
  const DOM_FLAG = "<!--dom-->";

  if (!fs.existsSync(path.resolve(process.cwd(), "./public"))) {
    await buildClientSide();
  }

  const htmlFilePath = path.resolve(process.cwd(), "./public/index.html");

  const htmlFileBuffer = fs.readFileSync(htmlFilePath, { encoding: "utf-8" });

  const htmlFile = htmlFileBuffer.toString();

  return htmlFile.replace(DOM_FLAG, content);
}

(async () => {
  try {
    const fastify = Fastify({
      logger: true,
    });

    fs.watch(
      path.resolve(process.cwd(), "./src/clientside"),
      {},
      async (eventType, filename) => {
        await buildClientSide();
      }
    );

    fastify.register(FastifyStatic, {
      root: path.resolve(process.cwd(), "./~partytown"),
      prefix: "/~partytown",
      decorateReply: false,
    });

    fastify.register(FastifyStatic, {
      root: [path.resolve(process.cwd(), "./public")],
      prefix: "/public",
      decorateReply: false,
    });

    // block response time for 5 sec

    // fastify.addHook("onRequest", async (_request, reply) => {
    //   await new Promise((resolve) => {
    //     setTimeout(() => {
    //       resolve(true);
    //     }, 5000);
    //   });
    // });

    fastify.get("/", async (_request, reply) => {
      const products = await axios.get<Product[]>(`${API_URL}/products`);
      const suggestions = await axios.get<Suggestions[]>(
        `${API_URL}/search-suggestion`
      );
      const listingBanners = await axios.get<Banner[]>(
        `${API_URL}/listing-banners`
      );
      //to show user banner remove banner server side request and fetch data in client side
      const topBanners = await axios.get<Banner[]>(`${API_URL}/top-banners`);
      const colorOptions = await axios.get<ColorOptions[]>(
        `${API_URL}/color-options`
      );

      // fetch data
      const initialData = {
        products: products.data,
        suggestions: suggestions.data,
        listingBanners: listingBanners.data,
        topBanners: topBanners.data,
        colorOptions: colorOptions.data,
        isSsr: true,
      };
      const decodedProps = serialize(initialData, { isJSON: true });
      const script = `<script>window["initialData"]=${decodedProps}</script>`;

      // https://gitlab.trendyol.com/discovery/mobile-web/packages/gateway-renderer/-/blob/master/src/index.ts#L12
      const reactComponent = renderToString(
        React.createElement(App, initialData, null)
      );
      const html = await buildReact(`${script} ${reactComponent}`);

      reply
        .code(200)
        .header("Content-Type", "text/html")
        .send(Buffer.from(html, "utf-8"));
    });

    fastify.get("/clientside", async (_request, reply) => {
      const html = await buildReact("");

      reply
        .code(200)
        .header("Content-Type", "text/html")
        .send(Buffer.from(html, "utf-8"));
    });

    fastify.register(routes, { prefix: "/api" });

    fastify.ready(async (err) => {
      if (err) throw err;
      await buildClientSide();
    });

    const PORT = parseInt(process.env.PORT || "3000");

    await fastify.listen({ port: PORT });
  } catch (error) {
    process.exit(0);
  }
})();
