const connection = require('../db');


const findOne = (id) => {
  const sql = 'SELECT * FROM User WHERE id = ?';
  return connection.promise().query(sql, [id]).then(([results]) => results);
}

const findOneByEmail = (email) => {
  const sql = 'SELECT * FROM User WHERE email = ?';
  return connection.promise().query(sql, [email]).then(([results]) => results);
}

const create = (user) => {
  const sql = 'INSERT INTO User SET ?';
  return connection.promise().query(sql, [user]).then(([results]) => results);
}

const deleteOne = (id) => {
  const sql = 'DELETE FROM User WHERE id = ?';
  return connection.promise().query(sql, [id]).then(([results]) => results);
}

module.exports = {
  deleteOne, findOne, create, findOneByEmail };