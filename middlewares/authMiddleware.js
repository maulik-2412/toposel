const jwt=require('jsonwebtoken');
require('dotenv').config();

const authenticate=(req,res,next)=>{
    const token=req.header('Authorization');
    if(!token) return res.status(401).json({message:'access denied'});
    try{
        const verified=jwt.verify(token,process.env.JWT_SECRET_KEY);
        req.user=verified;
        next();
    }catch(err){
        res.status(400).json({message:'invalid token'});
    }
};

module.exports={authenticate};