const express = require("express");
const jwt = require("jsonwebtoken");
const { Product } = require("../models/product");
const router = express.Router();
const mongoose = require("mongoose");
const { verify } = require("../utils/jwt");
const mongo = require('mongodb');
router.post("/", async (req, res) => {
  console.log(req.body);
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    isAvailable: req.body.isAvailable,
    numberToTake:req.body.numberToTake
  });
  console.log(product);
  const result = await product.save();
  res.status(200).send("Add Product successfully!!");
});

module.exports = router;
