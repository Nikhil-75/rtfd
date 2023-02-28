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
  //check if confrim password matches password in db
  const passwordIsCorrect=await bcrypt.compare(confrim_Password,password)

  //save new password
  if(user && passwordIsCorrect){
    user.password=password
    await user.save()
    res.status(200).send("Password  sucessfully")
  }else{
    res.status(400)
    throw new Error ("confrim password is incorrect")
  }

}
  //const uservalidation = async(req,res) => {

//login user

const userLogin= async(req,res) => {
    const {email,password}=req.body

    console.log(email)

    //validate request

    if(!email || !password){
        res.status(400).json({
            message:"please enter email and password",status:400
        })
    }


    //check if user exists



   // const existEmail = await validate.findOne({email:req.body.email});
   //if(existEmail) {


const userLogin = await validate.findOne({email:req.body.email});

if(!userLogin) {

res.status(400).json({
    message:"User not found, please signup", status:400
})

}


//user exists, then check if password is  correct


const passwordIsCorrect = await bcrypt.compare(password,userLogin.password)

//generate token

const token = generateToken(user._id);

if(userLogin && passwordIsCorrect) {
    const{ _id,name,email } = userLogin

    res.status(200).json({
        _id, name, email, token
    })
}else{
    res.status(400).json({
        message:"invalid email or password",status:400
    })
}

}   

module.exports = {uservalidation, userLogin};