const express = require("express");
const routes = express.Router();

const Usuario = require("./controllers/usuarios.controller");
const Cliente = require("./controllers/clientes.controller");



// rotas usuarios
// routes.get("/", Usuario.index);
routes.post("/api/usuarios", Usuario.create);
routes.get("/api/usuarios", Usuario.index);
routes.post("/api/usuarios/login", Usuario.login);
routes.get("/api/usuarios/destroytoken", Usuario.destroyToken);
routes.get("/api/usuarios/checktoken", Usuario.checkToken);
//rotas clientes
routes.post("/api/clientes", Cliente.create);
routes.get("/api/clientes", Cliente.index);
// routes.get("/api/clientes.details/:_id", Cliente.details);
// routes.delete("/api/clientes/:_id", Cliente.delete);

module.exports = routes;
