const validate = require('../models/userdata')
// const { userData, access_token } = require("../models/userdata");
exports.userId = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log(username,password,"============>")
  console.log(validate,"=======>")
  try {
    const user = await validate.findOne({ username, password }).exec();
    console.log(user,"=======>")
    return res
      .status(200)
      .json({ message: "user login  successfully", access_token: user._id});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getUser = async (req, res) => {
  const Id = req.query._id;
  try {
    const user = await validate.findById(Id).exec();
    return res
      .status(200) 
      .json({ message: "user data fetched successfully", user_details: user });
  } catch (error) {
    res.status(400).json({ message: 'access token do not match to any user  ' });
  }
};

exports.userData = async (req, res) => {
  try {
    const user = new validate(req.body);
    const savedData = await user.save();

    return res.status(200).json({
      message: "user registered successfully",
      user_id: savedData._id,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

