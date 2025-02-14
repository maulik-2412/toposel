require('dotenv').config();
const mongoose=require('mongoose');

const db=async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("db connected");
    }catch(error){
        console.error("Error in db"+error);
    }
}

module.exports=db;