import db from '../db.js';

export const createItem = (user, callback) => {
  const sql = "INSERT INTO items SET ?"; //fix

  db.query(sql, user, (err, result) => {
    if (err) return callback(err);
    callback(null, result);
  });
};

export const readItem = (callback) => {
  const sql = "SELECT * FROM items WHERE "; //fix

  db.query(sql, (err, results) => {
    if (err) return callback(err);
    callback(null, results);
  });
};

export const updateItem = (newData, callback) => {
  const sql = "UPDATE items SET ? WHERE "; //fix

  db.query(sql, newData, (err, result) => {
    if (err) return callback(err);
    callback(null, result);
  });
};

export const deleteItem = (callback) => {
  const sql = "DELETE FROM items WHERE "; //fix
  db.query(sql, (err, result) => {
    if (err) return callback(err);
    callback(null, result);
  });
};
