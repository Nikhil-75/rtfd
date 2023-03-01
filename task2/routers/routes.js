const express = require('express');
const userReg = require('../controllers/userController')

//const userLogin = require('../controllers/userController')

const uservalidation = require('../middlewares/validationdata')

const routers = express.Router();

routers.post('/login',userReg.userId)
routers.post('/registers',uservalidation,userReg.userData)
//routers.post('/registers',uservalidation,userLogin.userMatch)

module.exports = routers;
