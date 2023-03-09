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
  console.log(req.abc, "test.............")
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

exports.deleteUser = async (req, res) => {
  let Id = req.headers._id;
  try {
    const user = await userData.findByIdAndDelete(Id).exec();
    return res.status(200).json({ message: "user deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllUser =  async (req, res, next) => {
  const Count = req.query.count;
  try {
  const user = await userData.find().limit(Count)
  return res.status(200).json({user:user})
  } catch (error) {
    res.status(400).json({ message: error.message})
  }
}




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

