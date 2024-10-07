const validator=require("validator")

const ValidateData=(req )=>{
   const {firstName,lastName,emailId,password}=req.body

   if (!firstName ||!lastName){
     //res.status(400).send("invalid.");
    return("Invalid")
   }
   else if (!validator.isEmail(emailId)){
    // res.status(400).send("Invalid Cridentila");
     return("Invalid")
   }
   else if (!validator.isStrongPassword(password)){
   // res.status(400).send("password is not strong enough");
    return("password is not strong")
  }



}
module.exports = {ValidateData};
