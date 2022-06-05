const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  password: "",
  user: "root",
  database: "seller",
});

db.connect((err) => {
  err ? console.log(err) : console.log("db connected");
});

module.exports = db;
