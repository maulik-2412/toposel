const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');

const userSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    fullName:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    dateOfBirth:{
        type:Date,
        required:true,
    },
    country:{
        type:String,
        required:true
    }

})

userSchema.pre('save',async function(next){
    if(!this.isModified('password'))return next();
    const salt=await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password,salt);
    next();
})

const Users=new mongoose.model("Users",userSchema);

module.exports=Users;