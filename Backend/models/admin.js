const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
require('mongoose-double')(mongoose);
var SchemaTypes = mongoose.Schema.Types;

const AdminSchema = new mongoose.Schema({
    name: {type:String,trim:true},
    email: {type:String,trim:true},
    password: {type:String},
    age: {type: Number}
});


AdminSchema.methods.generateAuthToken = function() { 
    const token = jwt.sign({ _id: this._id }, 'jwtPrivateKey');
    return token;
  }

  
  const Admin = mongoose.model('Admin', AdminSchema);
  module.exports.Admin= Admin;
