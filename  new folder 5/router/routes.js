const express =require('express');
const router = express.Router();
const userCon = require('../userController/controller');


console.log(userCon,'---')



router.post('/',userCon.getData)

router.post('/userdataprofile',userCon.getDob)
 
router.get('/userdataprofile',userCon.getAvg)


module.exports = router;
