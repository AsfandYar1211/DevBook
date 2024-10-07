const express= require ("express");
const connectDB=require("./config/database")
const User =require("./models/user")
const {ValidateData} =require("./utils/validator")
const validator=require("validator")
const bcrypt =require("bcrypt")
const app= express()
  app.use(express.json())
// app.post("/signup" ,async (req,res)=>{
//     console.log(req.body)
// })
app.get("/user",async(req,res)=>{
    // const userEmail=req.body.emailId
    try {
        const users =await User.find({emailId:req.body.emailId})
        if (users.length===0){
            res.status(404).send("User not found")
        }else{
             res.send(users)}
       
    } catch (error) {
        res.status(400).send("somethin went wrong")
    }

})
app.delete("/user",async (req,res) => {
    const userId= req.body.userId
    try {
        const user = await User.findByIdAndDelete(userId)
       
        res.send("user deleted successfuly")
    } catch (error) {
        res.status(400).send("somethin went wrong")
    }
   
})
app.patch("/user",async (req,res) => {
    const userId=req.body.userId
    const data=req.body
    const user=await User.findByIdAndUpdate({_id:userId},data)
    res.send ("user updated succesfuky")
})
app.post("/signup" ,async (req,res)=>{
    try {
        
      
        //validation
        const validationError = ValidateData(req);
        if (validationError) {
            return res.status(400).send(validationError); // Send error response and exit
        }
        //encrypting password
        const {firstName,lastName,emailId,password}= req.body
        const passwordHash =await bcrypt.hash(password,10)
          console.log(passwordHash)
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

connectDB()
.then(()=>{
   console.log("DB successfully connected")
   app.listen(1881,()=>{
    console.log("App is running on  server" + 1881)
    });
})

.catch((err)=>{
console.error("Error occured in db")
})


