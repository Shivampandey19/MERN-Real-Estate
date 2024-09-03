import bcryptjs from 'bcryptjs';
import User from '../Models/User.model.js';
import { errorHandler } from "../Utility/Error.js";


export const test = (req,res) => {
    res.send('API Route is working')
};

export const updateUser = async (req, res, next) => {
    if( req.user.id !== req.params.id) 
        return next(errorHandler(401, 'You can only update your own account'));
    try {
        if(req.body.password) {
            req.body.password = bcryptjs.hashSync(req.body.password, 10);
        }

        const updatedUser = await User.findByIdAndUpdate
        (req.params.id, {
            $set: {
                userName: req.body.userName,
                email: req.body.email,
                password: req.body.paassword,
                avatar: req.body.avatar,
            },
        },
        { new: true }
    );
        const { password, ...rest } = updatedUser._doc;
        res
        .status(200)
        .json(rest);
    } catch (error) {
        next(error);
    }
};

export const deleteUser = async (req,res,next)=>{
    if(req.user.id!== req.params.id)
        return(errorHandler(401,'You can only delete your account'));
    try {
        await User.findByIdAndDelete(req.params.id);
        res
        .clearCookie('access_token');
        res
        .status(200)
        .json('User has been deleted')
        
    } catch (error) {
        next(error);
    }
}

