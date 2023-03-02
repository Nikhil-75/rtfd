const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { Schema } = mongoose;

const registerSchema = new mongoose.Schema({

username:{type:String, unique:true},
firstName:{type:String, required:true},
lastName:{type:String, required:true},
email:{type:String, unique:true, required:true
},
password:{type:String, required:true,minLength:6},
confirm_Password:{type:String, required:true}
});

//encrypted password using bcryptjs 


registerSchema.pre("save",async function(next){ 
  
   userSchema.statics.login = async function(username,password){

       
       
       if(!this.isModified("password")){
           return next()
        }
        
        
        //hash password
        
        const salt=await bcrypt.genSalt(10)
        const hashedPassword=await bcrypt.hash(this.password,salt)
        this.password=hashedPassword
        next()
    }
    })
    
    
const user =  mongoose.model('Registers',registerSchema);

//const loginUser = mongoose.model('Login',loginSchema);

//module.exports = loginSchema
module.exports =  user
