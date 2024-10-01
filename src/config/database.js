const mongoose =require("mongoose")
 const connectDB= async () => {
    await mongoose.connect("mongodb+srv://asfandarar1211:YemHNggbQeoeXrX4@asfand.1tdwd.mongodb.net/DevBook")
 }

 module.exports= connectDB;
