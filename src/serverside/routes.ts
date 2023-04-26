import { FastifyInstance } from "fastify";
import {
  getColorOptions,
  getProduct,
  getProducts,
} from "./controllers/product-controllers";
import { getSearchSuggestion } from "./controllers/search-suggestion-controllers";
import { getBanners } from "./controllers/banner-controllers";

export async function routes(fastify: FastifyInstance) {
  fastify.get("/product", async (_request, reply) =>
    getProduct(_request, reply)
  );
  fastify.get("/products", async (_request, reply) =>
    getProducts(_request, reply)
  );
  fastify.get("/search-suggestion", async (_request, reply) =>
    getSearchSuggestion(_request, reply)
  );
  fastify.get("/banners", async (_request, reply) =>
    getBanners(_request, reply)
  );
  fastify.get("/color-options", async (_request, reply) =>
    getColorOptions(_request, reply)
  );
}
