var mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "rnfuser",
  password: "rnfleaguekekdzw",
  database: "liga",
});

con.connect((err) => {
  if (err) throw err;
  console.log("CONEXION ACTIVA");
});

con.query("SELECT * FROM equipos;", (err, rows) => {
  if (err) {
    console.log("Se ha producido un error en la consulta");
    throw err;
  } else {
    console.log("Consulta exitosa");
  }
});

con.end();
