const {UserData,UserToken}   = require('../models/userdata')

const md5 = require('md5')



// delete userdata through specific userID
exports.deleteUser = async (req, res) => {
  let Id = req.headers._id;
  try {
    const user = await UserData.findByIdAndDelete(Id).exec();
    return res.status(200).json({ message: "user deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


//return all user address using token Id by populate....................

exports.allData = async (req, res) => {
  try {
    const data = await UserData.find();
    return res.status(200).json({message: "data fetched successfully", user_detail: data});
  } catch (error) {
    res.status(400).json({message: error.message });
  }
};

//find allUser data accroding to pagination....
exports.getAllUser =  async (req, res, next) => {
  const Count = req.headers.count;
  console.log(Count,"header..............")
  try {
  const user = await UserData.find().limit(Count)
  console.log(user,"==================>")
  return res.status(200).json({user:user})
  } catch (error) {
    res.status(400).json({ message: error.message})
  }
}



//fetched the userdata accroding to  usrID...
exports.getUser = async (req, res) => {
  const Id = req.headers._id;
  console.log(Id, "test.............")
  try {
    const user = await UserData.findById(Id).exec();
    console.log(user,"==========>")
    return res
      .status(200) 
      .json({ message: "user data fetched successfully", user_details: user });
  } catch (error) {
    res.status(400).json({ message: 'access token do not match to any user  ' });
  }
};

// find token ID during userLogin..
exports.userId = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  
  try {
    const user = await UserData.findOne({ username }).exec();
console.log(user,"==>")
    const token = md5(user._id)
    console.log(token,'=========>')

    const access_tokens = await token.save();

    // console.log(access_tokens,"========>")
    return res
      .status(200)
      .json({ message: "user login  successfully", access_token: access_tokens});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// enter user address and save in database...
exports.userAddress = async (req,res) => {
  try {
    const addre = new access_token(req.body);
    const savedData = await  addre.save();
    return res
    .status(200)
    .json({ mesage: "user address enter successfully", 
    user_id: savedData._id, })
  } catch (error) {
    res.status(400).json({message: error.message});
  }
}




// save to allregisterData
exports.userData = async (req, res) => {
  try {
    const user = new UserData(req.body);
    const savedData = await user.save();

    return res.status(200).json({
      message: "user registered successfully",
      user_id: savedData._id,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

