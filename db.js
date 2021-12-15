const mysql = require('mysql2');
const {
  DB_HOST: host,
  DB_USER: user,
  DB_PASS: password,
  DB_PORT: port,
  DB_NAME: database,
} = process.env;

const connection = mysql.createConnection({
  host,
  user,
  password,
  database,
  port,
});

module.exports = connection;
