import express from 'express';
import mongoose from 'mongoose';
import dotenv  from 'dotenv';
import userRouter from '../APIs/Routes/User.route.js'

dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Connented to MongoDB');
}).catch((err)=>{
    console.log(err);
});

const app=express();

app.listen(3000, () => {
    console.log ('Server is running at 3000');
    }
);

app.use('/api/user',userRouter);