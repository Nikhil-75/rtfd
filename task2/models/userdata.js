const mongoose = require("mongoose");
const { Schema } = mongoose;

const registerSchema = new mongoose.Schema({

username:{type:String, unique:true},
firstName:{type:String, required:true},
lastName:{type:String, required:true},
email:{type:String, unique:true},
password:{type:String, required:true}

});

const user =  mongoose.model('Registers',registerSchema);


 module.exports =  user
