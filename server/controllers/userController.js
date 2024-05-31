import * as userModel from "../models/userModel.js"

export const createUser = (req, res) => {
  const admin = req.body;
  userModel.createUser(admin, (err, result) => {
    if (err) {
      console.error("Error creating admin user ", err);
      res.status(500).send(err);
    } else {
      res.status(201).send(result);
    }
  });
};

export const readUser = (req, res) => {
  userModel.readUser((err, result) => {
    if (err) {
      console.error("Error reading admin user:", err);
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
      console.error("Error updating admin user:", err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
};

export const deleteUser = (req, res) => {
  userModel.deleteUser((err, result) => {
    if (err) {
      console.error("Error deleting admin user:", err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
};