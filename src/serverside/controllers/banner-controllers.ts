import { FastifyReply, FastifyRequest } from "fastify";

export async function getListingBanners(
  request: FastifyRequest,
  reply: FastifyReply
) {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 2000);
  });

  const response = [
    {
      imageUrl:
        "https://cdn.dsmcdn.com/marketing/datascience/automation/2023/4/24/Mweb_Pdp_202304241557.jpg",
      name: "sale-20",
      type: "listing-banner",
    },
    {
      imageUrl:
        "https://cdn.dsmcdn.com/sfint/production/web_search2x_1680641396786.jpg",
      name: "welcome-20",
      type: "listing-banner",
    },
    {
      imageUrl:
        "https://cdn.dsmcdn.com/ty739/int/banner/20022023a9b20_DE_web_info_banner.jpg",
      name: "baybay-20",
      type: "listing-banner",
    },
  ];

  try {
    reply.code(200).send(response);
  } catch (error) {
    reply.code(500).send(error);
  }
}

export async function getTopBanners(
  request: FastifyRequest,
  reply: FastifyReply
) {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });

  const response = [
    {
      imageUrl:
        "https://cdn.dsmcdn.com/sfint/production/sale-banner_1682372605742.png",
      name: "sale-20",
      type: "top-banner",
    },
    {
      imageUrl:
        "https://cdn.dsmcdn.com/sfint/production/web_search2x_1680641396786.jpg",
      name: "welcome-20",
      type: "top-banner",
    },
    {
      imageUrl:
        "https://cdn.dsmcdn.com/ty739/int/banner/20022023a9b20_DE_web_info_banner.jpg",
      name: "baybay-20",
      type: "top-banner",
    },
  ];

  try {
    reply.code(200).send(response);
  } catch (error) {
    reply.code(500).send(error);
  }
}
