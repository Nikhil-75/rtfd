const validate = require("../models/userdata")

const bcrypt =require('bcryptjs');

const {getAllUser, userData} = require('../controllers/userController')

const userList = async(req,res,next)=>{
    const Count = req.query.count;
    try {
       const user =  await userData.find().limit(Count);
       console.log("Successfully All User Data",user);
       return res.status(200).json({user:user})
    } catch (error) {
       return res.status(400).json({ message: error.message})
    }
 }

module.exports = userList