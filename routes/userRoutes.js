const express=require('express');
const Users=require('../models/Users');
const {authenticate}=require('../middlewares/authMiddleware')
const router=express.Router();

router.get('/searchUser',async(req,res)=>{
    const {username,email}=req.query;
    try{
        const user=await Users.findOne({$or:[{username},{email}]});
        if(!user) return res.status(404).json({message:'user not found'});
        res.json(user);
    }catch(err){
        
        res.status(500).json({message:'server error'});
    }
});

module.exports=router;