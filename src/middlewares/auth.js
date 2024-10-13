const jwt=require("jsonwebtoken")
const User=require("../models/user")
const UserAuth=async(req,res,next)=>{
  try {
    const {token}=req.cookies 
    if (!token) {
        return res.status(401).send("Access denied. No token provided.");
    }
    const decodedObj=await jwt.verify(token,"devisgood@777")
    const {_id}=decodedObj
    const user=await User.findById(_id)
    if (!user) {
        return res.status(404).send("User not found.");
    }
    req.user = user;
    next();
    
  } catch (error) {
    console.error(error); 
    res.status(500).send("Error displayed")
  }

}

module.exports=UserAuth; 