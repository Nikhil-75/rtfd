const express = require('express');

const routers = express.Router();

const userReg = require('../controllers/userController')

routers.post('/registers', userReg.userData)


module.exports = routers;