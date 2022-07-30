import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

const DB = process.env.DATABASE
mongoose.connect(DB).then((ele)=>console.log("Database conneted")).catch((error)=>console.log("error" , error.message))