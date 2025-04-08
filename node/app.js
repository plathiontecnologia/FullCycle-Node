const express = require("express");
const { executarSQL } = require("./database");

const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  try {
    var sql =
      "Create table if not exists people (id int auto_increment primary key, name varchar(255))";
    await executarSQL(sql);
    console.log("Tabela people criada com sucesso");

    var sql = "Insert Into people (name) Values ('Helder')";
    await executarSQL(sql);
    console.log("Registro inserido com sucesso");

    sql = "Select name From people";
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
