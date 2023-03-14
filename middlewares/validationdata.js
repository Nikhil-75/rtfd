const UserData  = require('../models/userdata')
const bcrypt = require('bcryptjs')

const uservalidation = async (req, res, next) => {

  const errors = [];
  const emailRegexp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  if (!emailRegexp.test(req.body.email)) {
    const error = {
      field: "Email",
      message: "Not a valid UserDataemail",
    };
    error.push(error);
  }

  if (req.body.password !== req.body.confirm_Password) {
    const error = {
      field: "password",
      message: "password doesn't match",
    };
    errors.push(error);
  }

  if (errors.length > 0)
    return res.status(500).json({ Error: "Please check below fields", errors });

  const existEmail = await UserData.findOne({ email: req.body.email });
  if (existEmail) {
    const error = {
      field: "Email",
      message: "Email is exist"
    };
    
    return next("email is already exist");
  }

  const existUsername = await UserData.findOne({ username: req.body.username });

  if (existUsername) {   ///  check exit username
    const error = {
      field: "Username",
      message: "username taken",
    };
    return next("username is already exists use a different username");
  }
  next();
};

module.exports = uservalidation


