const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./src/routes");
const swaggerDocumentation = require("./src/helper/document");
const swaggerDoc = require("swagger-ui-express");
const app = express();
const port = process.env.PORT || 5000;

mongoose.connect(
  // "mongodb://mongo:27017/testevcodes", Voce pode conectar no banco fisico criado pelo docker
  "mongodb+srv://root:1234@cluster0.ysxl1.mongodb.net/testevcodes?retryWrites=true&w=majority",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    // useFindAndModify:false
  },
  function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("conectou saporra");
    }
  }
);

app.use(express.json());
app.use("/doc", swaggerDoc.serve);
app.use("/doc", swaggerDoc.setup(swaggerDocumentation));

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(routes);

app.listen(port, function () {
  console.log(`ta rodando na ${port}`);
});
