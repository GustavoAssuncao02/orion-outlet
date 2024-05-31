import db from '../db.js';

export const createUser = (user, callback) => {
  const sql = "INSERT INTO users SET ?";

  db.query(sql, user, (err, result) => {
    if (err) return callback(err);
    callback(null, result);
  });
};

export const readUser= (callback) => {
  const sql = "SELECT * FROM users WHERE is_admin = 1";

  db.query(sql, (err, results) => {
    if (err) return callback(err);
    callback(null, results);
  });
};

export const updateUser = (newData, callback) => {
  const sql = "UPDATE users SET ? WHERE is_admin = 0"; //need fix and add cpf on users db

  db.query(sql, newData, (err, result) => {
    if (err) return callback(err);
    callback(null, result);
  });
};

export const deleteUser = (callback) => {
  const sql = "DELETE FROM users WHERE is_admin = 0"; //need fix and add cpf on users db
  db.query(sql, (err, result) => {
    if (err) return callback(err);
    callback(null, result);
  });
};
