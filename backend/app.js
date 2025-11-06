import express from "express";  
import dotenv from "dotenv";
import {connectDb} from "./database/db.js";

dotenv.config();
let app=express();
app.use(express.json());
const port=process.env.PORT;

app.listen(port, ()=>{
    console.log(`✅ App is listening on http://localhost:${port}`);
    connectDb();
})
