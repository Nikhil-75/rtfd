const { UserData, UserAddress } = require('../models/userdata')
const jwtService = require('../services/jwtService')
const key = require("../config");


const tokenVerify = async (req, res, next) => { 

try {
    if(!req.headers.authorization) {
        return res.send("login required again")
    }

    const token = req.headers.authorization.split(" ")[1]


    if(token) {
        const verified = jwt.verify(token,key.secretkey);


        res.token = verified;
        next()
    }
} catch(error) {
    res.status(400).json({
        message: error.message
    });
}

}

module.exports = tokenVerify;