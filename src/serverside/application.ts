import path from "node:path";
import fs from "node:fs";
import Fastify from "fastify";
import FastifyStatic from "@fastify/static";
import { build } from "vite";
import viteReactPlugin from "@vitejs/plugin-react";
import { renderToString } from "react-dom/server";
import React from "react";
import App from "../clientside/Product";
import serialize from "serialize-javascript";
import { routes } from "./routes";
import axios from "axios";
import { Product } from "../clientside/interfaces/product";
import { API_URL } from "../constants";
import { Banner } from "../clientside/interfaces/banner";
import { Suggestions } from "../clientside/interfaces/search-suggestions";
import Home from "../clientside/Home";

function buildClientSide() {
  return build({
    root: path.resolve(process.cwd(), "./src/clientside"),
    base: "/public",
    build: {
      emptyOutDir: true,
      cssMinify: false,
      minify: false,
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
      root: path.resolve(process.cwd(), "./assets"),
      prefix: "/assets",
      decorateReply: false,
    });

    fastify.register(FastifyStatic, {
      root: [path.resolve(process.cwd(), "./public")],
      prefix: "/public",
      decorateReply: false,
    });

    // *** pdp CSR
    fastify.get("/pdp", async (_request, reply) => {
      const html = await buildReact("");

      reply
        .code(200)
        .header("Content-Type", "text/html")
        .send(Buffer.from(html, "utf-8"));
    });

    // *** homepage
    // homepage CSR
    // fastify.get("/homepage", async (_request, reply) => {
    //   const html = await buildReact("");

    //   reply
    //     .code(200)
    //     .header("Content-Type", "text/html")
    //     .send(Buffer.from(html, "utf-8"));
    // });

    // homepage SSR
    // fastify.get("/homepage", async (_request, reply) => {
    //   const listingBanners = await axios.get<Banner[]>(
    //     `${API_URL}/home-banners`
    //   );

    //   // fetch data
    //   const initialData = {
    //     listingBanners: listingBanners.data,
    //     isSsr: true,
    //   };
    //   const decodedProps = serialize(initialData, { isJSON: true });
    //   const script = `<script>window["initialData"]=${decodedProps}</script>`;

    //   const reactComponent = renderToString(
    //     React.createElement(Home, initialData, null)
    //   );
    //   const html = await buildReact(`${script} ${reactComponent}`);

    //   reply
    //     .code(200)
    //     .header("Content-Type", "text/html")
    //     .send(Buffer.from(html, "utf-8"));
    // });

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
