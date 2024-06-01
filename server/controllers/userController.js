import * as userModel from "../models/userModel.js"

export const createUser = (req, res) => {
  const user = req.body;
  userModel.createUser(user, (err, result) => {
    if (err) {
      console.error("Error creating user ", err);
      res.status(500).send(err);
    } else {
      res.status(201).send(result);
    }
  });
};

export const readUser = (req, res) => {
  userModel.readUser((err, result) => {
    if (err) {
      console.error("Error reading user:", err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
};

export const updateUser = (req, res) => {
  const newData = req.body;
  userModel.updateUser(newData, (err, result) => {
    if (err) {
      console.error("Error updating user:", err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
};

export const deleteUser = (req, res) => {
  userModel.deleteUser((err, result) => {
    if (err) {
      console.error("Error deleting user:", err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
};