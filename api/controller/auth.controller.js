import User from "../model/user.model.js";
import { errorHandler } from '../utils/error.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jasonwebtoken';

export const signup = async (req, res, next) => {
    const { email, username, tel, password } =  req.body;
    const newUser = new User({ email, username, tel, password });
    
    try {
    await newUser.save();
    res.status(201).json("User created succesfully");

    } catch(error) {
        next(error);
    }
};

export const signin = async (req, res, next) => {
    const { email, password } =  req.body;
    
    try {
        const validUser = await User.findOne({ email });
        if (!validUser) return next(errorHandler( 404, 'User not found!' ));
        const validPassword = bcryptjs.compareSync( password, validUser.password );
        if (!validPassword) return next(errorHandler(401, 'Invalid password!'));

    } catch(error) {
        next(error);
    }
};