const express = require('express');
const jwt = require('jsonwebtoken');
const {Product} = require('../models/product');
const router = express.Router();
const mongoose= require('mongoose');
const {verify} = require('../utils/jwt');


router.get('/get-products', async ( req , res )=>{
    const {userInfo} = req;
    const product = await Product.find();
    res.send(product);
});
module.exports = router;