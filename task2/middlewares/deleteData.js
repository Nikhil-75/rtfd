const validate = require("../models/userdata")

const bcrypt =require('bcryptjs');

const {deleteUser} = require('../controllers/userController')

const dataDelete = async(req,res,next)=>{

      //const Id = req.headers._id;

      const {_id} = req.headers;
  try {
    const user = await validate.findByIdAndDelete(_id).exec();
    console.log("data  delete variable",user);
    return res.status(200).json({ message: "user deleted successfully" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }

}

module.exports = dataDelete

