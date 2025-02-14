require('dotenv').config();
const express=require('express');
const router=express.Router();
const jwt=require('jsonwebtoken');
const Users=require('../models/Users')
const bcrypt=require('bcryptjs')

router.post("/userRegistration",async(req,res)=>{
    const {username, email, password, fullName, gender, dateOfBirth, country}=req.body;
    try{
        let user=await Users.findOne({username});
        if(user) return res.status(400).json({message:'User exists'});
        user=new Users({username,email,password,fullName,gender,dateOfBirth,country});
        await user.save();
        res.status(200).json({message:'user registered succesfully'});
    }catch(err){
        console.error(err);
        res.status(500).json({message:'server error',error:err.message});
    }
});

router.post("/userLogin",async(req,res)=>{
    const {username,password}=req.body;
    try{
        const user=await Users.findOne({username});
        if(!user) return res.status(400).json({message:'user doesnt exist'});
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch) return res.status(400).json({message:'invalid creds'});
        const token=jwt.sign({id:user._id},process.env.JWT_SECRET_KEY,{expiresIn:'1h'});
        res.json({token,user});
    }catch(err){
        console.error(err);
        res.status(500).json({message:'error logging in'});
    }
});

module.exports=router;



