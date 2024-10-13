const mongoose =require("mongoose")
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const userSchema= new mongoose.Schema({
    firstName:{
        type: String,
         
    },
    lastName:{
        type: String
    },
    emailId:{
        type: String,
       

    },
    password:{
        type: String
    }, 
    age:{
        type: Number
    },
    gender:{
        type: String
    },
    
    
},{
timestamps:true

})

userSchema.methods.getJWT=async function () {
    const user=this
    const token =await jwt.sign({_id:user._id},"devisgood@777") 
    return token
}
userSchema.methods.validatePassword = async function (passwordInputByUser) {
     const user=this
     const passwordHash=user.password
    const ispasswordValid=await bcrypt.compare(passwordInputByUser,passwordHash)
    return ispasswordValid
}

module.exports=mongoose.model("User", userSchema)