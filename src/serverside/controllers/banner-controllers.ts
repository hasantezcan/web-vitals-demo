import { FastifyReply, FastifyRequest } from "fastify";
import { Banner } from "../../clientside/interfaces/banner";

export async function getHomePageBanners(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const response = [
    {
      imageUrl:
        "https://cdn.dsmcdn.com/ty863/int/banner/03052023c08c1_DE_woman_boutique_banner_epr16.jpg",
      name: "sale-20",
      type: "listing-banner",
    },
    {
      imageUrl:
        "https://cdn.dsmcdn.com/ty862/int/banner/03052023da2ee_DE_woman_boutique_banner_bo524.jpg",
      name: "welcome-20",
      type: "listing-banner",
    },
    {
      imageUrl:
        "https://cdn.dsmcdn.com/ty861/int/banner/03052023a79a4_DE_woman_boutique_banner_bo553.jpg",
      name: "baybay-20",
      type: "listing-banner",
    },
    {
      imageUrl:
        "https://cdn.dsmcdn.com/ty862/int/banner/03052023a2c3d_DE_woman_boutique_banner_epr6.jpg",
      name: "baybay-20",
      type: "listing-banner",
    },
  ];

  const emptyResponse = [] as Banner[];
  try {
    reply.code(200).send(response);
  } catch (error) {
    reply.code(500).send(error);
  }
}

export async function getListingBanners(
  request: FastifyRequest,
  reply: FastifyReply
) {
  // await new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve(true);
  //   }, 2000);
  // });

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
  const emptyResponse = [] as Banner[];
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
  // await new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve(true);
  //   }, 3000);
  // });

  const response = [
    {
      imageUrl:
        "https://cdn.dsmcdn.com/sfint/production/marketing-banner_1683209671849.png",
      name: "top-banner-large",
      type: "top-banner",
    },
    {
      imageUrl:
        "https://cdn.dsmcdn.com/sfint/production/marketing-banner-xs_1683210459937.jpg",
      name: "top-banner-optimized",
      type: "top-banner",
    },
    {
      imageUrl:
        "https://cdn.dsmcdn.com/ty739/int/banner/20022023a9b20_DE_web_info_banner.jpg",
      name: "baybay-20",
      type: "top-banner",
    },
  ];
  const emptyResponse = [] as Banner[];
  try {
    reply.code(200).send(response);
  } catch (error) {
    reply.code(500).send(error);
  }
}
