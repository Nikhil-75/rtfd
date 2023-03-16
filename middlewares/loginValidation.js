const { UserData } = require('../models/userdata')
//const jwt=require("jsonwebtoken")
const bcrypt = require("bcryptjs");
const { userId } = require('../controllers/userController');


const userlogin = async (req, res, next) => {

  try {
    const { username, password } = req.body

    if (!username && !password) {
      return res.status(400).json({ message: "please inter username and password", statuss: 400 })
    }



    const user = await UserData.findOne({ username })
    if (!user) {
      return res.status(400).json({
        message: "username is not found", status: 400
      })
    }

    const passwordIsCorrect = await bcrypt.compare(password, user.password)

    if (!passwordIsCorrect) {

      return res.status(400).json({
        message: "password is not found ", status: 400
      })

    }

    next()



  } catch (error) {
    console.log(error)
  }


}





module.exports = userlogin