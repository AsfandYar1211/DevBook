const express= require ("express");
const request=express.Router()
const UserAuth=require("../middlewares/auth"); 
request.post("/SendConnectionRequest",UserAuth,async (req,res) => {
    const user=req.user
    res.send(user.firstName+ " send the coonection request")
})


module.exports=request