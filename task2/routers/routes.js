const express = require('express');
const userReg = require('../controllers/userController')
const uservalidation = require('../middlewares/validationdata')

const routers = express.Router();
routers.post('/registers',uservalidation,userReg.userData)


module.exports = routers;