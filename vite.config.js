const { defineConfig } = require("vite");
const path = require("node:path");
const viteReactPlugin = require("@vitejs/plugin-react");

const config = {
  root: path.resolve(process.cwd(), "./src/clientside"),
  base: "/public",
  build: {
    emptyOutDir: true,
    outDir: path.resolve(process.cwd(), "./public"),
  },
  plugins: [viteReactPlugin()],
}

module.exports.config = config;

module.exports = defineConfig(config);
