const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { Schema } = mongoose;

let salt = 10;

const registerSchema = new mongoose.Schema({

username:{type:String, unique:true},
firstName:{type:String, required:true},
lastName:{type:String, required:true},
email:{type:String, unique:true, required:true
},
password:{type:String, required:true,minLength:6},
confirm_Password:{type:String, required:true}
});

//password encryption using bcrypt

registerSchema.pre("save", function (next) {
  var user = this;

  if (!user.isModified("password")) return next();
  bcrypt.genSalt(salt, function (err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

registerSchema.methods.comparePassword = function (userPassword, callback) {
  bcrypt.compare(userPassword, this.password, function (err, isMatch) {
    if (err) return callback(err);
    callback(null, isMatch);
  });
};

//registerSchema.pre("save",async function(next){ 
  
//    user.statics.login = async function(username,password){

       
       
//        if(!this.isModified("password")){
//            return next()
//         }
        
        
//         //hash password
        
//         const salt=await bcrypt.genSalt(10)
//         const hashedPassword=await bcrypt.hash(this.password,salt)
//         this.password=hashedPassword
//         next()
//     }
//     })
    
    
const user =  mongoose.model('Registers',registerSchema);

//const loginUser = mongoose.model('Login',loginSchema);

//module.exports = loginSchema
module.exports =  user
