const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const DataSchema = new mongoose.Schema(
  {
    nome_client: String,
    email_client: String,
    cpf_client: String,
    telefone_client: Number,
    endereco_client: String,
  },
  {
    timestamps: true,
  }
);

const clientes = mongoose.model("clientes", DataSchema);
module.exports = clientes;
