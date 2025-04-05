const express = require("express");
const { executarSQL } = require("./database");

const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  try {
    var sql = "INSERT INTO people (name) VALUES ('Helder')";
    await executarSQL(sql);
    console.log("Registro inserido com sucesso");

    sql = "SELECT name FROM people";
    const resultados = await executarSQL(sql);
    console.log(resultados);
    res.send("<h1>Full Cycle Rocks!</h1>" + JSON.stringify(resultados));
  } catch (error) {
    console.error("Erro ao executar a consulta:", error);
    res.status(500).send("Erro ao executar a consulta");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
