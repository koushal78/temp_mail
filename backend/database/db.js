import mongoose from "mongoose";

export const connectDb= async()=>{
    try{
        await mongoose.connect(process.env.DB);
        console.log("database connected");

    }
    catch(err){
        console.log("❌ Database connection failed:", err.message);
    }
}