const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World');
});

router.post("/login", (req, res) => {
});

router.post("/register/item", (req, res) => {
});

router.post("/delete/item", (req, res) => {
});

router.post("/update/item", (req, res) => {
});

router.post("/select/item", (req, res) => {
});





router.post("/register/cart", (req, res) => {
});

router.post("/delete/cart", (req, res) => {
});

router.post("/update/cart", (req, res) => {
});

router.post("/select/cart", (req, res) => {
});

module.exports = router;
