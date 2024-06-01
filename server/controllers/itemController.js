import * as itemModel from "../models/itemModel.js"

export const createItem = (req, res) => {
  const admin = req.body;
  itemModel.createItem(admin, (err, result) => {
    if (err) {
      console.error("Error creating item ", err);
      res.status(500).send(err);
    } else {
      res.status(201).send(result);
    }
  });
};

export const readItem = (req, res) => {
  itemModel.readItem((err, result) => {
    if (err) {
      console.error("Error reading item:", err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
};

export const updateItem = (req, res) => {
  const newData = req.body;
  itemModel.updateItem(newData, (err, result) => {
    if (err) {
      console.error("Error updating Item:", err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
};

export const deleteItem = (req, res) => {
  itemModel.deleteItem((err, result) => {
    if (err) {
      console.error("Error deleting Item:", err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
};