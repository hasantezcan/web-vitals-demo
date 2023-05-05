import { FastifyReply, FastifyRequest } from "fastify";

export async function getProduct(request: FastifyRequest, reply: FastifyReply) {
  const response = {
    id: 1,
    title: "Nike Runner",
    price: 44.99,
    description:
      "Description Gray sneaker, structured Flat heel Small heel height, between 1-4 cm Upper: 100% Synthetic;Inner Material: 100% Textile;Outsole: 100% Rubber Care Instructions See care label for detailed care instructions. Additional Info Dispatched and sold by Shoes24. From this product can A maximum of 10 pieces can be ordered. Trendyol reserves the right to cancel orders over 10 pieces cancel.",
    category: "Shoes",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8s",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
    ],
  };

  try {
    reply.code(200).send(response);
  } catch (error) {
    reply.code(500).send(error);
  }
}

export async function getProducts(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const response = [
    {
      id: 1,
      title: "Nike Runner",
      price: 44.99,
      description:
        "Description Gray sneaker, structured Flat heel Small heel height, between 1-4 cm Upper: 100% Synthetic;Inner Material: 100% Textile;Outsole: 100% Rubber Care Instructions See care label for detailed care instructions. Additional Info Dispatched and sold by Shoes24. From this product can A maximum of 10 pieces can be ordered. Trendyol reserves the right to cancel orders over 10 pieces cancel.",
      category: "Shoes",
      images: [
        // "MUCO",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
        "https://cdn.dsmcdn.com/ty629/product/media/images/20221208/1/230142809/642030272/1/1_org_zoom.jpg",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
      ],
    },
    {
      id: 2,
      title: "Nike Air Max",
      price: 100.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "Shoes",
      images: [
        "https://cdn.dsmcdn.com/ty843/product/media/images/20230425/17/331916752/918887352/1/1_org_zoom.jpg",
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8s",
      ],
    },
    {
      id: 3,
      title: "Nike Sweatshirt - Schwarz",
      price: 100.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "Shoes",
      images: [
        "https://cdn.dsmcdn.com/ty793/product/media/images/20230323/14/310216664/893750624/1/1_org_zoom.jpg",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
      ],
    },
    {
      id: 4,
      title: "Nike Air Force",
      price: 100.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "Shoes",
      images: [
        "https://cdn.dsmcdn.com/ty819/product/media/images/20230410/11/321380352/907035292/2/2_org_zoom.jpg",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
      ],
    },
    {
      id: 5,
      title: "Blazer - Rosa - Regular",
      price: 100.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "Shoes",
      images: [
        "https://cdn.dsmcdn.com/ty820/product/media/images/20230410/11/321380352/907035372/2/2_org_zoom.jpg",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
      ],
    },
    {
      id: 6,
      title: "Trend Alaçatı Stili",
      price: 100.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "Shoes",
      images: [
        "https://cdn.dsmcdn.com/ty510/product/media/images/20220817/14/161457229/544517770/2/2_org_zoom.jpg",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
      ],
    },
    {
      id: 6,
      title: "Trend Alaçatı Stili",
      price: 100.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "Shoes",
      images: [
        "https://cdn.dsmcdn.com/ty510/product/media/images/20220817/14/161457229/544517770/2/2_org_zoom.jpg",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
      ],
    },
    {
      id: 6,
      title: "Trend Alaçatı Stili",
      price: 100.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "Shoes",
      images: [
        "https://cdn.dsmcdn.com/ty510/product/media/images/20220817/14/161457229/544517770/2/2_org_zoom.jpg",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
      ],
    },
    {
      id: 6,
      title: "Trend Alaçatı Stili",
      price: 100.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "Shoes",
      images: [
        "https://cdn.dsmcdn.com/ty510/product/media/images/20220817/14/161457229/544517770/2/2_org_zoom.jpg",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
      ],
    },
    {
      id: 6,
      title: "Trend Alaçatı Stili",
      price: 100.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "Shoes",
      images: [
        "https://cdn.dsmcdn.com/ty510/product/media/images/20220817/14/161457229/544517770/2/2_org_zoom.jpg",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
      ],
    },
    {
      id: 6,
      title: "Trend Alaçatı Stili",
      price: 100.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "Shoes",
      images: [
        "https://cdn.dsmcdn.com/ty510/product/media/images/20220817/14/161457229/544517770/2/2_org_zoom.jpg",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
      ],
    },
    {
      id: 6,
      title: "Trend Alaçatı Stili",
      price: 100.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "Shoes",
      images: [
        "https://cdn.dsmcdn.com/ty510/product/media/images/20220817/14/161457229/544517770/2/2_org_zoom.jpg",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
      ],
    },
    {
      id: 6,
      title: "Trend Alaçatı Stili",
      price: 100.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "Shoes",
      images: [
        "https://cdn.dsmcdn.com/ty510/product/media/images/20220817/14/161457229/544517770/2/2_org_zoom.jpg",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
      ],
    },
    {
      id: 6,
      title: "Trend Alaçatı Stili",
      price: 100.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "Shoes",
      images: [
        "https://cdn.dsmcdn.com/ty300/product/media/images/20220120/12/30403245/318546029/2/2_org_zoom.jpg",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
      ],
    },
    {
      id: 6,
      title: "Trend Alaçatı Stili",
      price: 100.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "Shoes",
      images: [
        "https://cdn.dsmcdn.com/ty335/product/media/images/20220216/15/51129575/62779954/2/2_org_zoom.jpg",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
      ],
    },
    {
      id: 6,
      title: "Trend Alaçatı Stili",
      price: 100.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "Shoes",
      images: [
        "https://cdn.dsmcdn.com/ty335/product/media/images/20220216/15/51129575/62779954/2/2_org_zoom.jpg",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
      ],
    },
    {
      id: 6,
      title: "Trend Alaçatı Stili",
      price: 100.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "Shoes",
      images: [
        "https://cdn.dsmcdn.com/ty335/product/media/images/20220216/15/51129575/62779954/2/2_org_zoom.jpg",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
      ],
    },
  ];

  try {
    reply.code(200).send(response);
  } catch (error) {
    reply.code(500).send(error);
  }
}
export async function getColorOptions(
  request: FastifyRequest,
  reply: FastifyReply
) {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 500);
  });
  const response = [
    {
      color: "black",
      category: "hue",
      type: "primary",
      code: {
        rgba: [255, 255, 255, 1],
        hex: "#000",
      },
    },
    {
      color: "white",
      category: "value",
      code: {
        rgba: [0, 0, 0, 1],
        hex: "#FFF",
      },
    },
    {
      color: "red",
      category: "hue",
      type: "primary",
      code: {
        rgba: [255, 0, 0, 1],
        hex: "#FF0",
      },
    },
    {
      color: "blue",
      category: "hue",
      type: "primary",
      code: {
        rgba: [0, 0, 255, 1],
        hex: "#00F",
      },
    },
    {
      color: "yellow",
      category: "hue",
      type: "primary",
      code: {
        rgba: [255, 255, 0, 1],
        hex: "#FF0",
      },
    },
    {
      color: "green",
      category: "hue",
      type: "secondary",
      code: {
        rgba: [0, 255, 0, 1],
        hex: "#0F0",
      },
    },
  ];

  try {
    reply.code(200).send(response);
  } catch (error) {
    reply.code(500).send(error);
  }
}
