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





router.post("/register/orders", (req, res) => {
});

router.post("/delete/orders", (req, res) => {
});

router.post("/update/orders", (req, res) => {
});

router.post("/select/orders", (req, res) => {
});



module.exports = router;
