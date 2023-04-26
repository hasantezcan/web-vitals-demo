import { FastifyReply, FastifyRequest } from "fastify";

export const sendEvent = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  console.log(request.body);

  reply.code(200).send("ok");
};
