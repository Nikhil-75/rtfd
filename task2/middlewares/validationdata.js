const validate = require('../models/userdata')
const bcrypt=require("bcryptjs")
const uservalidation = async(req,res) => {
     const existUsername = await validate.findOne({username:req.body.username});
     if(existUsername) {
        console.log("username taken");
        res.status(400).json({
            message:"username taken"
        })
    } else {
        console.log('user register')
    }
     const user = new validate(req.body);
     const saveuserData = await user.save();
     return res.status(300).json({
        message: "user add successful",
        saveData: saveData._id,
    });


 //Useremail = await validate.findOne({useremail:req.body})


const existEmail = await validate.findOne({email:req.body.email});
if(existEmail) {
    console.log("userEmail taken");
    res.status(400).json({
        message:"userEmail taken"
    })
} else {
    console.log('user register')
}
const useremail = new validate(req.body);
const saveuseremailData = await user.save();
return res.status(300).json({
    message: "useremail add successful",
    saveData: saveData._id,
});


//password must be match to confrim password

   //validate
if(!confirm_Password || !password){
    res.status(404)
    throw new Error ("Please add right password")
}
  //check if cuser
    res.status(400)
    throw new Error ("confrim password is incorrect")
  }
module.exports = uservalidation;

//login user


  //get user
  const getUser=async (req,res)=>{
    const users= await validate.find()
    res.status(200).send(users)
  }
  // register user
  const registerUser = 
      async (req, res) => {
  
         const {name,email,password}= req.body
  
         //Validation
         if(!name ||!email || !password){
          res.status(400).json({message:"Please fill in all required fields",status:"400"})
          
         }
          
if(password.length<6){
        res.status(400).json({message:"Password must be upto 6 characters",status:"400"})
        
         }
  
         //check if user email already exists
        const userExists= await validate.findOne({email})
  
        if(userExists){
          res.status(400).json({message:"Email is already been register",status:"400"})
          
        }
  

  
  
  
        
  //generate token 
  const token=generateToken(user._id);
  if(user){
          const{_id,name,email}=user
          res.status(201).json({
              _id,name,email,token
              })
  
        }else{
          res.status(400).json({message:"Invalid user data",status:"400"})
        
        }
  
  
  
      }
       //login user

const loginUser=async (req,res)=>{
    const {email,password}=req.body
  console.log(email)
    //validate request
    if(!email || !password){
      res.status(400).json({message:"Please enter email and password",status:400})
      
    }
  
    //check if user exists
    const user =await user.findOne({email})
  
    if(!user){
      res.status(400).json({message:"User not found, please signup",status:400})
     
    }
    //user exists, check if password is correct
  
    const passwordIsCorrect=await bcrypt.compare(password,user.password)
  
    //generate token 
  const token=generateToken(user._id);
  

  
    if(user && passwordIsCorrect){
      const{_id,name,email}=user
      res.status(200).json({
          _id,name,email,token
      })
    }else{
      res.status(400).json({message:"Invalid email or password",status:400})
     
    }
  
  }


  //updateUser

const updateUser=async (req,res)=>{

    const user=await validate.findById(req.user._id)
  
    if(user){
      const{name,email}=user
      user.email=email
      user.name=req.body.name|| name
    
  
      const updatedUser= await user.save()
  res.status(200).json({
    _id:updatedUser._id,
    name:updatedUser.name,
    email:updatedUser.email,
  
  })
    } else{
      res.status(404)
      throw new Error ("User not found")
    }
  
  }
  
  //change password function
   const changePassword=async(req,res)=>{
    const user=await validate.findById(req.user._id)
  
    const {confirm_Password,password}=req.body
    if(!user){
      res.status(404)
      throw new Error ("User not found , please signup")
    }
  
    //validate
    if(!confirm_Password || !password){
      res.status(404)
      throw new Error ("Please add old and new password")
    }
    //check if old password matches password in db
    const passwordIsCorrect=await bcrypt.compare(confirm_Password,user.password)
  
    //save new password
    if(user && passwordIsCorrect){
      user.password=password
      await user.save()
      res.status(200).send("Password changed sucessfully")
    }else{
      res.status(400)
      throw new Error ("old password is incorrect")
    }
  
   }


   module.exports={
    registerUser,loginUser,updateUser,changePassword,getUser
   }