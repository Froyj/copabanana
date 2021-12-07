const db = require('../db').promise();

const findAll = () => {
  const sql = 'SELECT * FROM Dish';
  return db.query(sql).then(([results]) => results);
}

const findOne = (id) => {
  const sql = 'SELECT * FROM Dish WHERE id = ?';
  return db.query(sql, [id]).then(([results]) => results);
}

const create = (dish) => {
  const sql = 'INSERT INTO Dish SET ?';
  return db.query(sql, [dish]).then(([results]) => results);

}

const updateOne = (id, dish) => {
  const sql = 'UPDATE Dish SET ? WHERE id = ?';
  return db.query(sql, [dish, id]).then(([results]) => results);
}

const deleteOne = (id) => {
  const sql = 'DELETE FROM Dish WHERE id = ?';
  return db.query(sql, [id]).then(([results]) => results);
}

module.exports = {
  findAll, findOne, create, updateOne, deleteOne
};