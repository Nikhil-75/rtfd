//const dbConnect = require('../models/userdata')

const validate = require('../models/userdata')  //userschema import
//const bcrypt=require("bcryptjs")
exports.userData = async (req,res) => {
   console.log("post method called")
   const user = new validate(req.body);
   try {
            // user.username = req;
            const val = await user.save();
            res.json(val);
            // console.log(req.body)
        } catch (error) {
            console.log(error)
            res.status(500).send(error);
        }

    }

exports.userId = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log(username,password,)
  try {
    const user = await validation.findOne({ username, password });
    console.log(user,)
    return res
      .status(200)
      .json({ message: "user login successfully", access_token: user});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}; 
          