const express = require('express');
const userReg = require('../controllers/userController')
const uservalidation = require('../middlewares/validationdata')
const userlogin = require('../middlewares/loginvalidation');
const userget = require('../middlewares/getuservalidation');
const dataDelete = require('../middlewares/deleteData');
const userList = require('../middlewares/userlist');
const routers = express.Router();
//userReg ------> userId, userData, getuser
routers.post('/login',userlogin,userReg.userId)         
routers.post('/registers',uservalidation,userReg.userData)
routers.get("/get/",userget,userReg.getUser)
routers.put("/delete",dataDelete,userReg.deleteUser)
routers.get("/list/",userList,userReg.getAllUser)
module.exports = routers;
