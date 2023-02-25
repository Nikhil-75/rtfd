//********working here */
const User = require("../models/userdata")

// getuser

  const getUser=(async (req,res)=>{
    const users= await User.find()
    res.status(200).send(users)
  })


 
      
//check if user email already exists
const userExists= await User.findOne({email})
  
  if(userExists){
     res.status(400).json({message:"Email is already been register",status:"400"})
          
        }
        
const userEmail = await user.findOne({email})

if(userEmail) {
  res.status(400).json({
    message:"email is already been register",status:"400"
  })
}

  
module.exports={getUser}  