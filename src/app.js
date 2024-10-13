const express= require ("express");
const connectDB=require("./config/database")
const auth=require("./routes/auth")
const profile=require("./routes/profile")
const request=require("./routes/request")
const cookieParser=require("cookie-parser")
const app= express()
  app.use(express.json())
  app.use(cookieParser())

app.use("/",auth)
app.use("/",profile)
app.use("/",request)

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


