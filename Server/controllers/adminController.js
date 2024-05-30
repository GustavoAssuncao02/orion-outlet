import * as adminModel from "../models/AdminModel.js"

export const createAdmin = (req, res) => {
  const admin = req.body;
  adminModel.createAdmin(admin, (err, result) => {
    if (err) {
      console.error("Error creating admin user ", err);
      res.status(500).send(err);
    } else {
      res.status(201).send(result);
    }
  });
};

export const readAdmin = (req, res) => {
  adminModel.readAdmin((err, result) => {
    if (err) {
      console.error("Error reading admin user:", err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
};

export const updateAdmin = (req, res) => {
  const newData = req.body;
  adminModel.updateAdmin(newData, (err, result) => {
    if (err) {
      console.error("Error updating admin user:", err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
};

export const deleteAdmin = (req, res) => {
  adminModel.deleteAdmin((err, result) => {
    if (err) {
      console.error("Error deleting admin user:", err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
};