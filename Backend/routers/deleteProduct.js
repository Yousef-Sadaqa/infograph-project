const express = require("express");
const jwt = require("jsonwebtoken");
const { Product } = require("../models/product");
const router = express.Router();
const mongoose = require("mongoose");
const { verify } = require("../utils/jwt");
const mongo = require('mongodb');

router.delete('/:id', function (req, res) {
    var id = req.params.id;
  
    Product.deleteOne({ _id: new mongo.ObjectId(id) }, function (err, results) {
    });
    console.log("deleted");
    res.json({ success: id })
  });
  module.exports = router;