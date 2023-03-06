const validate = require('../models/userdata')

const bcrypt=require("bcryptjs");
const{getUser} = require('../controllers/userController')
 
const userget = async(req,res,next)=>{
const Id = req.query._id;
console.log("user id",Id)
try {
    const user = await validate.findById(Id).exec();
     console.log("data variable",user);
    return res.status(200).json({message:"user data fetched successfully", user_details:user });
}  catch (eror) {
    res.status(400).json({message:'access token do not match to any user'});
}  
};


  
module.exports = userget