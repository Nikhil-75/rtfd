const validate = require('../models/userdata')
const { userData, access_token } = require("../models/userdata");
const md5 = require("md5");

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

/*exports.userLogin = async (req,res) => {


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


}*/


exports.userId = async (req, res) => {
  //const username = req.body.username;
  //const password = req.body.password;
const { username, password } = req.body;
  console.log(username, password, "=====>")

const Id = req.body.user_id;

  try {
    const data = await userData.login(username, password);
    const token = md5(data._id);
    const access_tokens = await access_token({ access_token: token }).save();
    console.log(access_tokens, "======>");

    return res
      .status(200)
      .json({ message: "user login successfully", access_token: userData._id });
    } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


exports.getUser = async (req, res) => {
  const Id = req.query._id;
  try {
    const user = await validate.findById(Id).exec();

    //   const user = await userData.findById(Id).exec();
    return res.status(200)
    .json({ message: "user data fetch successfull", user_details:user });

  } catch (error) {
    res.status(400).json({ message: "access_token do not match to any user" });

  }
};





