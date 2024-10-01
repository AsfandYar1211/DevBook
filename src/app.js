const express= require ("express");
const connectDB=require("./config/database")
const User =require("./models/user")
const app= express()
  

app.post("/signup" ,async (req,res)=>{
const user=new User({
    firstName:"Asfand",
    lastName:"Yar",
    emailId:"asfandarar1211@gmail.com"
})

await user.save()
res.send("user added successfuly")
})

connectDB()
.then(()=>{
   console.log("DB successfully connected")
   app.listen(1881,()=>{
    console.log("App is running on 1881 server")
    });
})

.catch((err)=>{
console.error("Error occured")
})


