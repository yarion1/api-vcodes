const { application } = require("express");

const user = [
  {
    _id: "629d38d418156b752f543a5e",
    email_user: "joao@gmail.com",
    senha_user: "$2b$10$j2xrxJS20jw0Cgy2pedtHeCv3E4hOq9fs59Q/wdBJ/q1mnhgd0kKW",
    createdAt: "2022-06-05T23:14:28.042Z",
    updatedAt: "2022-06-05T23:14:28.042Z",
  },
];
const loginn = [
  {
    status: 1,
    auth: true,
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZjb2Rlc0BnbWFpbC5jb20iLCJpYXQiOjE2NTQ2MjUxOTgsImV4cCI6MTY1NDcxMTU5OH0.vg3vRhgRwaoInjCOPXrcQEx9l1hYboPP5h3Lkj6k5mk",
    id_user: "629d38d418156b752f073a5e",
  },
  {
    status: 2,
    error: "A senha não confere",
  },
  {
    status: 2,
    error: "E-mail não encontrado no banco de dados",
  },
];
const Clients = [
  {
    "nome_client": "celtinhaa",
    "email_client": "celtabetas@gmail.com",
    "cpf_client": "264.153.121-17",
    "telefone_client": 63987675432,
    "endereco_client": "concessionaria",
    "_id": "629c37a69a7eee4d37744b61",
    "createdAt": "2022-06-05T04:57:10.937Z",
    "updatedAt": "2022-06-05T04:57:10.937Z",
    "__v": 0
  },
];
const createClients = {
  tags: ["Client"],
  summary: "Create",
  description: "Cria Usuario",
  requestBody: {
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            nome_client: {
              type: "string",
              description: "Nome do Cliente",
              example: "celtinhaa",
            },
            email_client: {
              type: "string",
              description: "Email do Cliente",
              example: "celtabetas@gmail.com",
            },
            cpf_client: {
              type: "string",
              description: "Cpf do Cliente",
              example: "264.153.121-17",
            },
            telefone_client: {
              type: "string",
              description: "Telefone do Cliente",
              example: "63987675432",
            },
            endereco_client: {
              type: "string",
              description: "endereco do Cliente",
              example: "concessionaria",
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: "OK",
      content: {
        "application/json": {
          schema: {
            type: "object",
            example: Clients[0],
          },
        },
      },
    },
  },
};
const ListClients = {
  tags: ["Client"],
  summary: "List",
  description: "Lista todos os Clientes",
  responses: {
    200: {
      description: "OK",
      content: {
        "application/json": {
          schema: {
            type: "object",
            example: [
              {
                "_id": "629e83edb9e63a772baf482f",
                "nome_client": "Helter Sardeiro",
                "email_client": "helterdamassa@gmail.com",
                "cpf_client": "123.345.678-12",
                "telefone_client": 63991345678,
                "endereco_client": "casa da dona maria",
                "createdAt": "2022-06-06T22:47:09.641Z",
                "updatedAt": "2022-06-06T22:47:09.641Z",
                "__v": 0
              },
              {
                "_id": "629e845ab9e63a772baf4839",
                "nome_client": "Vitor da TVs",
                "email_client": "Vitao@gmail.com",
                "cpf_client": "434.323.323-45",
                "telefone_client": 63945647865,
                "endereco_client": "Pé de manga",
                "createdAt": "2022-06-06T22:48:58.510Z",
                "updatedAt": "2022-06-06T22:48:58.510Z",
                "__v": 0
              },
              {
                "_id": "629e88205a479c0ecc71a608",
                "nome_client": "Marcos Gilmario",
                "email_client": "marcosdev@gmail.com",
                "cpf_client": "123.123.987-12",
                "telefone_client": 12912345678,
                "endereco_client": "casa grande",
                "createdAt": "2022-06-06T23:05:04.457Z",
                "updatedAt": "2022-06-06T23:05:04.457Z",
                "__v": 0
              },
              {
                "_id": "629e8a6fefd73be500252d4f",
                "nome_client": "vandao ",
                "email_client": "vandao@gmail.com",
                "cpf_client": "123.456.213-91",
                "telefone_client": 123456789123,
                "endereco_client": "casa da dija",
                "createdAt": "2022-06-06T23:14:55.955Z",
                "updatedAt": "2022-06-06T23:14:55.955Z",
                "__v": 0
              },
              {
                "_id": "629f3491d75952c9d19c4216",
                "nome_client": "rei da cacsca",
                "email_client": "reidacachaca@gmail.com",
                "cpf_client": "123.654.875-12",
                "telefone_client": 99991031905,
                "endereco_client": "Quadra 55 Lote 118",
                "createdAt": "2022-06-07T11:20:49.274Z",
                "updatedAt": "2022-06-07T11:20:49.274Z",
                "__v": 0
              }
            ],
          },
        },
      },
    },
  },
};


const ListUsers = {
  tags: ["Usuarios"],
  summary: "List",
  description: "Lista todos os Usuarios",
  responses: {
    200: {
      description: "OK",
      content: {
        "application/json": {
          schema: {
            type: "object",
            example: [
              {
                _id: "629d38d418156b752f543a5e",
                email_user: "joao@gmail.com",
                senha_user:
                  "$2b$10$j2xrxJS20jw0Cgy2pedtHeCv3E4hOq9fs59Q/wdBJ/q1mnhgd0kKW",
                createdAt: "2022-06-05T23:14:28.042Z",
                updatedAt: "2022-06-05T23:14:28.042Z",
              },
            ],
          },
        },
      },
    },
  },
};

const createUsers = {
  tags: ["Usuarios"],
  summary: "Create",
  description: "Cria o Usuario",
  requestBody: {
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            email_user: {
              type: "string",
              description: "Email do Usuario",
              example: "joao@gmail.com",
            },
            senha_user: {
              type: "string",
              description: "Senha do Usuario",
              example: "1232322cfds",
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: "OK",
      content: {
        "application/json": {
          schema: {
            type: "object",
            example: user[0],
          },
        },
      },
    },
  },
};

const LoginUsers = {
  tags: ["Usuarios"],
  summary: "Login",
  description: "Faz login no sistema",
  requestBody: {
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            email: {
              type: "string",
              description: "Email do Usuario",
              example: "vcodes@gmail.com",
            },
            senha: {
              type: "string",
              description: "Senha do Usuario",
              example: "vcodes123",
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: "OK",
      content: {
        "application/json": {
          schema: {
            type: "object",
            example: loginn[0],
          },
        },
      },
    },
  },
};

const userRouteDoc = {
  "/api/usuarios": {
    get: ListUsers,
    post: createUsers,
  },
  "/api/usuarios/login": {
    post: LoginUsers,
  },
  "/api/clientes":{
    post: createClients,
    get: ListClients,
  },
};
module.exports = userRouteDoc;
