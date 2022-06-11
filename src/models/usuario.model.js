const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const DataSchema = new mongoose.Schema(
  {
    email_usuario: String,
    senha_usuario: String,
  },
  {
    timestamps: true,
  }
);
DataSchema.pre("save", function (next) {
  if (!this.isModified("senha_usuario")) {
    return next();
  }
  this.senha_usuario = bcrypt.hashSync(this.senha_usuario, 10);
  next();
});
DataSchema.methods.isCorrectPassword = function (password, callback) {
  bcrypt.compare(password, this.senha_usuario, function (err, same) {
    if (err) {
      callback(err);
    } else {
      callback(err, same);
    }
  });
};
const usuarios = mongoose.model("Usuarios", DataSchema);
module.exports = usuarios;
