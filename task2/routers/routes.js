const express = require('express');
const userReg = require('../controllers/userController')
const uservalidation = require('../middlewares/validationdata')
const routers = express.Router();
//userReg ------> userId, userData, getuser
routers.post('/login',userReg.userId)         
routers.post('/registers',uservalidation,userReg.userData)
routers.get("/get/",userReg.getUser)

module.exports = routers;
