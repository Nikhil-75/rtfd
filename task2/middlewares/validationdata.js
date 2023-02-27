const validate = require('../models/userdata')
const uservalidation = async(req,res) => {


    const existUsername = await validate.findOne({username:req.body.username});
    if(existUsername) {
        console.log("username taken");
        res.status(400).json({
            message:"username taken"
        })
    } else {
        console.log('user register')
    }
    const user = new validate(req.body);
    const saveuserData = await user.save();
    return res.status(300).json({
        message: "user add successful",
        saveData: saveData._id,
    });


const Useremail = await validate.findOne({useremail:req.body})


const existUsername = await validate.findOne({username:req.body.username});
if(existUsername) {
    console.log("username taken");
    res.status(400).json({
        message:"username taken"
    })
} else {
    console.log('user register')
}
const user = new validate(req.body);
const saveuserData = await user.save();
return res.status(300).json({
    message: "user add successful",
    saveData: saveData._id,
});
}

module.exports = uservalidation;