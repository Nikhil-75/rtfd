//const dbConnect = require('../models/userdata')

const validate = require('../models/userdata')  //userschema import
//const bcrypt=require("bcryptjs")
exports.userData = async (req,res) => {

   
        console.log("post method called")
        const user = new validate(req.body);
        try {
            // user.username = req;
            const val = await user.save();
            res.json(val);
            // console.log(req.body)
        } catch (error) {
            console.log(error)
            res.status(500).send(error);
        }

    }


        exports.userLogin = async (req,res) => {

   
            console.log("post method called")
            const user = new validate(req.body);
            try {
                // user.username = req;
                const val = await user.save();
                res.json(val);
                // console.log(req.body)
            } catch (error) {
                console.log(error)
                res.status(500).send(error);
            }

        
        }


