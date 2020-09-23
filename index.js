const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>CHEGOU AQUI</h1>")
})



app.listen(3000, function() {
  console.log("Server Rodando na URL http://localhost:3000");
});
