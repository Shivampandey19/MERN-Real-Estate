import express from 'express';
import mongoose from 'mongoose';
import dotenv  from 'dotenv';
import userRouter from '../APIs/Routes/User.route.js'
import authRouter from '../APIs/Routes/Auth.route.js'


dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Connented to MongoDB');
}).catch((err)=>{
    console.log(err);
});

const app=express();

app.use(express.json());

app.listen(3000, () => {
    console.log ('Server is running at 3000');
    }
);

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

app.use((err,req,res,next)=>{
    const statusCode=err.statusCode || 500;
    const message=err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    });
});