import { FastifyReply, FastifyRequest } from "fastify";

export async function getBanners(request: FastifyRequest, reply: FastifyReply) {
  const response = [
    {
      imageUrl:
        "https://cdn.dsmcdn.com/sfint/production/sale-banner_1682372605742.png",
      name: "sale-20",
      type: "top-banner",
    },
    {
      imageUrl:
        "https://cdn.dsmcdn.com/ty739/int/banner/20022023a9b20_DE_web_info_banner.jpg",
      name: "welcome-20",
      type: "listing-banner",
    },
    {
      imageUrl:
        "https://cdn.dsmcdn.com/ty739/int/banner/20022023a9b20_DE_web_info_banner.jpg",
      name: "baybay-20",
      type: "side-banner",
    },
  ];

  try {
    reply.code(200).send(response);
  } catch (error) {
    reply.code(500).send(error);
  }
}
