const express= require ("express");
const auth=express.Router()
const User =require("../models/user")
const validator=require("validator")
const bcrypt =require("bcrypt")
const {ValidateData} =require("../utils/validator")
const jwt=require("jsonwebtoken")

auth.post("/signup" ,async (req,res)=>{
    try {
        
       //validation
       ValidateData(req);
       
        //encrypting password
       const {firstName,lastName,emailId,password}= req.body
        const passwordHash =await bcrypt.hash(password,10)
        
         //creating instance
        const user=new User({
            firstName,lastName,emailId,password:passwordHash
        })
          await user.save()
         
          res.send("user added successfuly")
    } catch (error) {
        res.status(500).send("Error displayed")
    }
   

})
auth.post("/login",async (req,res) => {
    try {
        const {emailId,password}=req.body
    
          if (!validator.isEmail(emailId)){
             return res.status(400).send("Invalid email id")
               }
         const user =await User.findOne({emailId:emailId})
       
         if (!user){
             return res.status(404).send("email is not registerd")
         }
        const ispasswordValid= await user.validatePassword(password)
        if(ispasswordValid){
            //create jwt token
 const token =await user.getJWT()
            res.cookie("token",token)
            res.send("login successfully")
        }else {
            return res.status(401).send("Invalid  password")
        }
    } catch (error) {
        res.status(500).send("Error displayed")
    }
})

module.exports=auth