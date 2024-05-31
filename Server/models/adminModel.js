import db from '../db.js';

export const createAdmin = (user, callback) => {
  const sql = "INSERT INTO users SET ?";

  db.query(sql, user, (err, result) => {
    if (err) return callback(err);
    callback(null, result);
  });
};

export const readAdmin = (callback) => {
  const sql = "SELECT * FROM users WHERE is_admin = 1";

  db.query(sql, (err, results) => {
    if (err) return callback(err);
    callback(null, results);
  });
};

export const updateAdmin = (newData, callback) => {
  const sql = "UPDATE users SET ? WHERE is_admin = 1";

  db.query(sql, newData, (err, result) => {
    if (err) return callback(err);
    callback(null, result);
  });
};

export const deleteAdmin = (callback) => {
  const sql = "DELETE FROM users WHERE is_admin = 1";
  db.query(sql, (err, result) => {
    if (err) return callback(err);
    callback(null, result);
  });
};
