const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const express = require('express');
const bodyParser = require('body-Parser');
const getProduct = require('./routers/product');
const createProduct = require('./routers/createProduct');
const deleteProduct = require('./routers/deleteProduct');

const adminAuth = require('./routers/admin');
const app = express();
const cors = require('cors');
const authMiddleware = require('./utils/auth');
mongoose.connect('mongodb://localhost/pharmacy')
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use('/', getProduct);
app.use('/add-product',authMiddleware, createProduct);
app.use('/delete-product', deleteProduct);
app.use('/admin', adminAuth);
app.listen(8000, () => console.log('Listening on port 8000...'));
