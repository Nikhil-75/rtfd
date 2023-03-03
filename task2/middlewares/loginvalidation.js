const validate = require('../models/userdata')
const bcrypt=require("bcryptjs")
const userlogin = async (req, res, next) =>  {
 
  
  const {username,password}=req.body
  
    //validate request
   const user =await validate.findOne({username})
  
    if(!user){
      res.status(400).json({message:"User not found, please username provide",status:400})
     
    }

   // /user exists, check if password is correct
  
    const passwordIsCorrect=await bcrypt.compare(password,user.password)

  

  
    if(user && passwordIsCorrect){
      const{username,password}=user
      res.status(200).json({
          username,password
      })
    }else{
      res.status(400).json({message:"Invalid username or password",status:400})
     
    }



    module.export