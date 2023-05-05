import { FastifyInstance } from "fastify";
import {
  getColorOptions,
  getProduct,
  getProducts,
} from "./controllers/product-controllers";
import { saveBrowserData } from "./controllers/browser";
import { saveUserData } from "./controllers/user";
import { getSearchSuggestion } from "./controllers/search-suggestion-controllers";
import {
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
  fastify.get("/color-options", async (_request, reply) =>
    getColorOptions(_request, reply)
  );
  fastify.post("/send-event", async (_request, reply) =>
    sendEvent(_request, reply)
  );
  fastify.post("/browser", async (_request, _reply) => saveBrowserData());

  fastify.post("/user", async (_request, _reply) => saveUserData());
}
