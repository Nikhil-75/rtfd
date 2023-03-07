const validate = require('../models/userdata')

const bcrypt=require("bcryptjs");
const{getUser} = require('../controllers/userController')
 
const userget = async(req,res,next)=>{
    console.log(req.abc,".......................")
const {_id} = req.headers;
try {
   //onsole.log(req.test) 

    const user = await validate.findById(_id).exec();
console.log("data variable",user);
    return res.status(200).json({message:"user data fetched successfully", user_details:user });
}  catch (eror) {
    res.status(400).json({message:'access token do not match to any user'});
}  
};


  
module.exports = userget