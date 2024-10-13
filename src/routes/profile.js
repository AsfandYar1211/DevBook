const express= require ("express");
const profile=express.Router()
const UserAuth=require("../middlewares/auth"); 
profile.get("/profile", UserAuth ,async (req,res) => {
    try {
        
    const user=req.user
    res.send(user)
        
    } catch (error) {
        res.status(500).send("Error displayed")
    }
   
})

module.exports=profile