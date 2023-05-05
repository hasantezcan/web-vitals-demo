import { FastifyInstance } from "fastify";
import {
  getColorOptions,
  getProduct,
  getProducts,
} from "./controllers/product-controllers";
import { getSearchSuggestion } from "./controllers/search-suggestion-controllers";
import {
  getHomePageBanners,
  getListingBanners,
  getTopBanners,
} from "./controllers/banner-controllers";
import { sendEvent } from "./controllers/event-controllers";

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
  fastify.get("/top-banners", async (_request, reply) =>
    getTopBanners(_request, reply)
  );
  fastify.get("/listing-banners", async (_request, reply) =>
    getListingBanners(_request, reply)
  );
  fastify.get("/home-banners", async (_request, reply) =>
    getHomePageBanners(_request, reply)
  );
  fastify.get("/color-options", async (_request, reply) =>
    getColorOptions(_request, reply)
  );
  fastify.post("/send-event", async (_request, reply) =>
    sendEvent(_request, reply)
  );
}
