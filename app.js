const express=require('express')
const db=require('./config/db');
const app=express();
const authRoutes=require('./routes/authRoutes');
const userRoute=require('./routes/userRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db();

app.use(authRoutes);
app.use(userRoute);

app.listen(3000,()=>{
    console.log('server started');
})