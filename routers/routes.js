const express = require('express');
const routers = express.Router();
const userReg = require('../controllers/userController');
const userFile = require('../controllers/fileController');
const userlogin = require('../middlewares/loginValidation');
const uservalidation = require('../middlewares/validationdata')
const tokenVerify = require('../middlewares/tokenVerify')
//const validateToken = require('../middlewares/validateToken')
const passwordCheck = require("../middlewares/passwordReset");
const multer = require('multer');
//const tokenVerify = require("../middleware/tokenVerify");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
     cb(null, 'public/uploads')
  },

  filename: (req, file, cb) => {
    console.log(file);
         const ext = file.mimetype.split('/')[1];
         cb(null, `${file.fieldname}-${Date.now()}-${Math.round(Math.random() * 1E9)}}.${ext}`);
        //  cb(null, `${file.fieldname}-${Date.now()}-${ext}`);
        //cb(null, `${file.fieldname} + '-' + ${ Date.now()}+ '-' + ${ext}`)
        //cb(null, file.fieldname + '-' + Date.now()+ '.' +extension)

  },


});


const upload = multer({storage: storage});


routers.post('/registers', uservalidation, userReg.userData)
routers.post('/login', userlogin, userReg.userId)
routers.post('/address', tokenVerify, userReg.userAddress)
routers.get("/get", userReg.getUser)
routers.put("/delete", userReg.deleteUser)
routers.get("/list/", userReg.getAllUser)
routers.post("/forgot-password", userReg.forgetPassword)


routers.put("/upload",  upload.single("image"), userFile.fileController )


module.exports = routers;







