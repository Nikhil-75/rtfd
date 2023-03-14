const express = require('express');
const userReg = require('../controllers/userController')

const uservalidation = require('../middlewares/validationdata')

const routers = express.Router();


routers.post('/registers',uservalidation,userReg.userData)
routers.post('/login',userReg.userId)  
routers.post('/address',userReg.userAddress)
routers.get("/get",userReg.getUser)
routers.put("/delete",userReg.deleteUser)
routers.get("/list/",userReg.getAllUser)

module.exports = routers;

