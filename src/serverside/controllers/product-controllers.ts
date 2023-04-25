import { FastifyReply, FastifyRequest } from "fastify";

export async function getProduct(request: FastifyRequest, reply: FastifyReply) {
  const response = {
    id: 1,
    title: "Nike Runner",
    price: 44.99,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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

export async function getProducts(request: FastifyRequest, reply: FastifyReply) {
  const response = [
    {
      id: 1,
      title: "Nike Runner",
      price: 44.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "Shoes",
      images: [
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8s",
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
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8s",
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
