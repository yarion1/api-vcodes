const userRouteDoc = require("../user.doc");

const swaggerDocumentation = {
  openapi: "3.0.0",
  info: {
    title: "demo",

    version: "0.0.1",

    description:
      "Uma api de login e cadastro de clientes utilizando a pilha `MERN` e autenticacao `JWT`",
  },
  servers: [
    {
      url: "http://localhost:5000",
      description: "local dev",
    },
  ],
  tags: [
    {
      name: "Usuarios",
      description: "rotas do Usuario",
    },
  ],
  paths: {
    ...userRouteDoc,
  },
  tags: [
    {
      name: "Client",
      description: "rotas de Clientes",
    },
  ],
};

module.exports = swaggerDocumentation;
