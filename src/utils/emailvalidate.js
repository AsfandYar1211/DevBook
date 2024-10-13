const validator=require("validator")
const User =require("../models/user")
const emailValidator=async(req,res)=>{
    const {emailId,password}=req.body
        
if (!validator.isEmail(emailId)){
    return res.status(400).send("Invalid email id")
    
     
   }
const user =await User.findOne({emailId:emailId})

if (!user){
    return res.status(404).send("email is not registerd")
}

}

        module.exports = emailValidator