import path from "node:path";
import fs from "node:fs";
import Fastify from "fastify";
import FastifyStatic from "@fastify/static";
import {build} from "vite";
import viteReactPlugin from "@vitejs/plugin-react";
import {renderToString} from 'react-dom/server';
import React from "react";
import App from "../clientside/App";


async function buildReact(content: string) {
  const DOM_FLAG = "<!--dom-->";

  await build({
    root: path.resolve(process.cwd(), "./src/clientside"),
    base: "/public",
    build: {
      emptyOutDir: true,
      outDir: path.resolve(process.cwd(), "./public"),
    },
    plugins: [viteReactPlugin()],
  });

  const htmlFilePath = path.resolve(process.cwd(), "./public/index.html");

  const htmlFileBuffer = fs.readFileSync(htmlFilePath, { encoding: "utf-8" });

  const htmlFile = htmlFileBuffer.toString()

  return htmlFile.replace(DOM_FLAG, content);
}

(async () => {
  try {
    const fastify = Fastify({
      logger: true,
    });

    fastify.register(FastifyStatic, {
      root: path.resolve(process.cwd(), "./public"),
      prefix: "/public/"
    });

    fastify.get("/", async (_request, reply) => {
      
      const reactComponent = renderToString(React.createElement(App, {}));


      const html = await buildReact(reactComponent);

      reply.code(200).header("Content-Type", "text/html").send(Buffer.from(html, "utf-8"));
    })

    fastify.get("/clientside", async (_request, reply) => {
      const html = await buildReact("");
      
      reply.code(200).header("Content-Type", "text/html").send(Buffer.from(html, "utf-8"));
    });

    await fastify.listen({ port: 3000 });
  } catch (error) {
    process.exit(0);
  }
})();
