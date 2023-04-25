import { FastifyInstance } from "fastify";
import { getProduct, getProducts } from "./controllers/product-controllers";
import { getSearchSuggestion } from "./controllers/search-suggestion-controllers";

export async function routes(fastify: FastifyInstance) {
  fastify.get("/product", async (_request, reply) => getProduct(_request, reply));
  fastify.get("/products", async (_request, reply) => getProducts(_request, reply));
  fastify.get("/search-suggestion", async (_request, reply) => getSearchSuggestion(_request, reply));
  // fastify.get("/banner", async (_request, reply) => getProducts(_request, reply));
}
