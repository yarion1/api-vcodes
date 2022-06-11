const Cliente = require("../models/clientes.model");

module.exports = {
  //listar clientes//zz

  async index(req, res) {
    const client = await Cliente.find();
    res.json(client);
  },

 
  async create(req, res) {
    const {
      nome_client,
      email_client,
      cpf_client,
      telefone_client,
      endereco_client,
    } = req.body;
    let data = {};
    let client = await Cliente.findOne({ email_client });
    if (!client) {
      data = {
        nome_client,
        email_client,
        cpf_client,
        telefone_client,
        endereco_client,
      };
      client = await Cliente.create(data);
      return res.status(200).json(client);
    } else {
      return res.status(500).json(client);
    }
  },

  //detalhe cliente//

  async details(req, res) {
    const { _id } = req.params;
    const client = await Cliente.findOne({ _id });
    res.json(client);
  },

  //apagar cliente//

  async delete(req, res) {
    const { _id } = req.params;
    const client = await Cliente.findByIdAndDelete({ _id });
    return res.json(client);
  },
};
