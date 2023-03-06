const validate = require('../models/userdata')
const bcrypt=require("bcryptjs")
const { userData } = require('../controllers/userController');
//const { userId } = require('../controllers/userController');

 uservalidation = async (req, res, next) => {
   
  const errors = [];
   
  
  
      const emailRegexp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
      if (!emailRegexp.test(req.body.email)) {
        const error = {
          field: "Email",
          message: "Not a valid email",
        };
        errors.push(error);
      }
  
      if (req.body.password !== req.body.confirm_Password) {
        const error = {
          field: "password",
          message: "password doesn't match",
        };
        errors.push(error);
      }
      if (errors.lenvalidategth > 0)
        return res.status(500).json({ Error: "Please check below fields", errors });
  
      const existEmail = await validate.findOne({ email: req.body.email});
      if (existEmail) {
        const er = {
            field: "Email",
            message: "Email is exist"
        };
        
        return next("email is already exist");
       }


       const existUsername = await validate.findOne({username: req.body.username});

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


