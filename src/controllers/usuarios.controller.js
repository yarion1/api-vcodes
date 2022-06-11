const Usuario = require("../models/usuario.model");
const jwt = require("jsonwebtoken");
const { checkout } = require("../routes");
const secret = "mysecret";

module.exports = {

  //lista usuarios

  async index(req, res) {
    const user = await Usuario.find();
    res.json(user);
  },

  //criar usuario//

  async create(req, res) {
    const { email_usuario, senha_usuario } = req.body;
    let data = {};

    let user = await Usuario.findOne({ email_usuario });
    if (!user) {
      data = { email_usuario, senha_usuario };
      user = await Usuario.create(data);
      return res.status(200).json(user);
    } else {
      return res.status(500).json(user);
    }
  }, 

  //login user//

  async login(req, res) {
    const { email, senha } = req.body;
    Usuario.findOne({ email_usuario: email }, function (err, user) {
      if (err) {
        console.log(err);
        res
          .status(200)
          .json({ erro: "Erro no servidor. Por favor, tente novamente" });
      } else if (!user) {
        res.status(200).json({
          status: 2,
          error: "E-mail não encontrado no banco de dados",
        });
      } else {
        user.isCorrectPassword(senha, async function (err, same) {
          if (err) {
            res
              .status(200)
              .json({ error: "Erro no servidor. Por favor, tente novamente" });
          } else if (!same) {
            res.status(200).json({ status: 2, error: "A senha não confere" });
          } else {
            const payload = { email };
            const token = jwt.sign(payload, secret, {
              expiresIn: "24h",
            });
            res.cookie("token", token, { httpOnly: true });
            res.status(200).json({
              status: 1,
              auth: true,
              token: token,
              id_user: user._id,
            });
          }
        });
      }
    });
  },

 //apagar token//

  async destroyToken(req, res) {
    const token = req.headers.token;
    if (token) {
      res.cookie("token", null, { httpOnly: true });
    } else {
      res.status(401).send("Logout não autorizado!");
    }
    res.send("Sessão finalizada com sucesso!");
  },

//verificatoken//

  async checkToken(req,res){
    const token = req.body.token || req.query.token || req.cookies.token || req.headers['x-access-token'];
    if(!token){
        res.json({status:401,msg:'Não autorizado: Token inexistente!'});
    }else{
        jwt.verify(token, secret, function(err, decoded){
            if(err){
                res.json({status:401,msg:'Não autorizado: Token inválido!'});
            }else{
                res.json({status:200})
            }
        })
    }
  }
}
