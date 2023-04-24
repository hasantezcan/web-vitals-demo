import path from "node:path";
import fs from "node:fs";
import Fastify from "fastify";
import FastifyStatic from "@fastify/static";
import { fileURLToPath, pathToFileURL } from "node:url";
import { build, createServer } from "vite";
import viteReactPlugin from "@vitejs/plugin-react";
import { renderToString, renderToPipeableStream } from "react-dom/server";
import { ChunkExtractor } from '@loadable/server'

import React from "react";
import App from "../clientside/App";

async function buildReact({body, header, footer}: {body: string, header?: string, footer?: string}, isSSR = false) {
  const HEEADER_FLAG = "<!--header-->";
  const BODY_FLAG = "<!--body-->";
  const FOOTER_FLAG = "<!--footer-->";

  const outDir = path.resolve(process.cwd(), "./public");

  await build({
    root: path.resolve(process.cwd(), "./src/clientside"),
    base: "/public",
    build: {
      emptyOutDir: true,
      outDir,
      ssrManifest: true
    },
    plugins: [viteReactPlugin()],
  });

  let headerTags: string[] = [];
  

  if(isSSR) {
    const manifestJsonBuffer = fs.readFileSync(path.resolve(process.cwd(), './public/ssr-manifest.json'), "utf8");

    const manifestJson = JSON.parse(manifestJsonBuffer);

      for (const assets of Object.values(manifestJson)) {
        if(Array.isArray(assets)) {
          for(const asset of assets) {
            if(asset.includes(".js")) {
              headerTags.push(
                `<script type="module" crossorigin src="${asset}"></script>`
              )
            }
          }
        }
      }
  
  }

  const htmlFilePath = path.resolve(process.cwd(), "./public/index.html");

  const htmlFileBuffer = fs.readFileSync(htmlFilePath, { encoding: "utf-8" });

  const htmlFile = htmlFileBuffer.toString();

  let html = htmlFile.replace(BODY_FLAG, body);

  html = html.replace(HEEADER_FLAG, `${header || ""} ${headerTags.join("")}`);

  if(footer) {
    html = html.replace(FOOTER_FLAG, footer);
  }

  return html;
}

(async () => {
  try {

    const fastify = Fastify({
      logger: true,
    });

    fastify.register(FastifyStatic, {
      root: path.resolve(process.cwd(), "./public"),
      prefix: "/public/",
    });

    fastify.get("/", async (_request, reply) => {        
      const reactComponent = renderToString(React.createElement(App, {}));


      const html = await buildReact({
        body: reactComponent,
        header: ``
      }, true);

      reply.code(200).header("Content-Type", "text/html").send(Buffer.from(html, "utf-8"));
    });

    fastify.get("/clientside", async (_request, reply) => {
      const html = await buildReact({
        body: `<div id="root"></div>`
      });

      reply.code(200).header("Content-Type", "text/html").send(Buffer.from(html, "utf-8"));
    });

    await fastify.listen({ port: 3000 });
  } catch (error) {
    process.exit(0);
  }
})();
