const mongoose = require("mongoose");
//const bcrypt = require("bcryptjs")
const { Schema } = mongoose;

const registerSchema = new mongoose.Schema({

username:{type:String, unique:true},
firstName:{type:String, required:true},
lastName:{type:String, required:true},
email:{type:String, unique:true, match:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
},
password:{type:String, required:true,minLength:6},
confirm_Password:{type:String, required:true}
});

//encrypted password using bcryptjs 





const user =  mongoose.model('Registers',registerSchema);


 module.exports =  user
