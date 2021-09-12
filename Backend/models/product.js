const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
require('mongoose-double')(mongoose);
var SchemaTypes = mongoose.Schema.Types;

const ProductSchema = new mongoose.Schema({
    name: {type:String,trim:true},
    price: {type:Number,trim:true},
    description: {type:String,trim:true},
    isAvailable: {type: Boolean,default: true},
    numberToTake:{type:String, default:'Once'}
});


ProductSchema.methods.generateAuthToken = function() { 
    const token = jwt.sign({ _id: this._id }, 'jwtPrivateKey');
    return token;
  }

  
  const Product = mongoose.model('Product', ProductSchema);
  module.exports.Product= Product;
