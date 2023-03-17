const express = require('express');
const routers = express.Router();
const userReg = require('../controllers/userController');

const userlogin = require('../middlewares/loginValidation');
const uservalidation = require('../middlewares/validationdata')
const tokenVerify = require('../middlewares/tokenVerify')
//const validateToken = require('../middlewares/validateToken')



routers.post('/registers', uservalidation, userReg.userData)
routers.post('/login', userlogin, userReg.userId)
routers.post('/address', tokenVerify, userReg.userAddress)
routers.get("/get", userReg.getUser)
routers.put("/delete", userReg.deleteUser)
routers.get("/list/", userReg.getAllUser)

module.exports = routers;

