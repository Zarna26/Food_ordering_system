import mongoose from "mongoose";



export const connectDB= async()=>{
    await mongoose.connect('mongodb+srv://zarnakalsariya:Zarnagopi_kali@cluster0.0n0x8.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}