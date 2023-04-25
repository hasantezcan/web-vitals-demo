import { FastifyReply, FastifyRequest } from "fastify";

export async function getSearchSuggestion(request: FastifyRequest, reply: FastifyReply) {
  const response = [
    {
      url: "/sr?wb=38&os=1&sk=1",
      name: "koton",
      type: "Marke",
      imageUrl: null,
    },
    {
      url: "/sr?q=koton%20bekleidung&qt=koton%20bekleidung&st=koton%20bekleidung&os=1&sk=1",
      name: "koton bekleidung",
      type: "",
      imageUrl: null,
    },
    {
      url: "/sr?q=koton%20casual%20bekleidung&qt=koton%20casual%20bekleidung&st=koton%20casual%20bekleidung&os=1&sk=1",
      name: "koton casual bekleidung",
      type: "",
      imageUrl: null,
    },
    {
      url: "/sr?q=koton%20webstoff%20bekleidung&qt=koton%20webstoff%20bekleidung&st=koton%20webstoff%20bekleidung&os=1&sk=1",
      name: "koton webstoff bekleidung",
      type: "",
      imageUrl: null,
    },
    {
      url: "/sr?q=koton%20normaler%20%C3%A4rmel%20bekleidung&qt=koton%20normaler%20%C3%A4rmel%20bekleidung&st=koton%20normaler%20%C3%A4rmel%20bekleidung&os=1&sk=1",
      name: "koton normaler ärmel bekleidung",
      type: "",
      imageUrl: null,
    },
    {
      url: "/sr?q=koton%20regular%20bekleidung&qt=koton%20regular%20bekleidung&st=koton%20regular%20bekleidung&os=1&sk=1",
      name: "koton regular bekleidung",
      type: "",
      imageUrl: null,
    },
    {
      url: "/sr?q=koton%20unifarben%20bekleidung&qt=koton%20unifarben%20bekleidung&st=koton%20unifarben%20bekleidung&os=1&sk=1",
      name: "koton unifarben bekleidung",
      type: "",
      imageUrl: null,
    },
    {
      url: "/sr?q=koton%201%20st%C3%BCck%20bekleidung&qt=koton%201%20st%C3%BCck%20bekleidung&st=koton%201%20st%C3%BCck%20bekleidung&os=1&sk=1",
      name: "koton 1 stück bekleidung",
      type: "",
      imageUrl: null,
    },
    {
      url: "/sr?q=koton%20regular%20fit%20bekleidung&qt=koton%20regular%20fit%20bekleidung&st=koton%20regular%20fit%20bekleidung&os=1&sk=1",
      name: "koton regular fit bekleidung",
      type: "",
      imageUrl: null,
    },
    {
      url: "/sr?q=koton%20basic%20bekleidung&qt=koton%20basic%20bekleidung&st=koton%20basic%20bekleidung&os=1&sk=1",
      name: "koton basic bekleidung",
      type: "",
      imageUrl: null,
    },
    {
      url: "/sr?q=koton%20rundhalsausschnitt%20bekleidung&qt=koton%20rundhalsausschnitt%20bekleidung&st=koton%20rundhalsausschnitt%20bekleidung&os=1&sk=1",
      name: "koton rundhalsausschnitt bekleidung",
      type: "",
      imageUrl: null,
    },
  ];

  try {
    reply.code(200).send(response);
  } catch (error) {
    reply.code(500).send(error);
  }
}
