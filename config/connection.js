var mysql = require("mysql");

var connection = mysql.createConnection({
  root: 3000,
  host: "localhost",
  user: "root",
  password: "M@rch201995",
  database: "burger_db",
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
