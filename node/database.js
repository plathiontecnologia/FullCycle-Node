const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
});

function executarSQL(sql, parametros = []) {
  return new Promise((resolve, reject) => {
    connection.query(sql, parametros, (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
}

module.exports = {
  executarSQL,
};
