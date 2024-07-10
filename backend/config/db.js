import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect("mongodb+srv://nitish:qwerty12345@cluster0.m2d1nsv.mongodb.net/food-delivery").then(()=>console.log("DB Connected"));
}