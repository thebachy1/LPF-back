const express = require("express");
const productSchema = require("../models/Product");
const router = express.Router();

router.get("/products", (req, res) => {
  productSchema
    .find({})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
