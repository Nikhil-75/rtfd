const access_token = require('../models/userdata');
///for md5
const validateToken = async (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            return next("unauthorization user");
        }


        const tokens = req.headers.authorization.split(" ")[1]
        const existToken = await access_token.findOne({ access_token: tokens, });
        console.log(existToken, "=============>");
        if (existToken)
            next();
    } catch (error) {
        return res.status(403).send({
            success: false,
            message: "No token provided.",
        })
    }

}


module.exports = validateToken;