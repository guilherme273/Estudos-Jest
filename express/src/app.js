const index = require("./index");
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => console.log("rodando"));

app.get("/:valor/:desconto", (req, res) => {
  const valor = req.params.valor;
  const desconto = req.params.desconto;
  const result = index.subtraction(Number(valor), Number(desconto));
  res.json(result);
});
module.exports = app;
