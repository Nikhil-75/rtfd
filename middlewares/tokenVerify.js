const { UserData, UserAddress } = require('../models/userdata')
const jwtService = require('../services/jwtService')
const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken");


const tokenVerify = async (req, res, next) => {

    try {
        if (!req.headers.authorization) {
            return res.send("login required again")
        }

        const tokens = req.headers.authorization.split(" ")[1]


        if (tokens) {
            const verified = jwt.verify(tokens, JWT_SECRET);


            res.token = verified;

            next()
        }
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }

}

module.exports = tokenVerify;