const express= require ("express");
 
const app= express()


app.get("/about",(req,res)=>{
    res.send("tell me about you")

});
app.use("/contact",(req,res)=>{
    res.send(" you")

});
app.use("/",(req,res)=>{
    res.send("I am main page")

});
app.listen(1881,()=>{
console.log("App is running on 1881 server")
})