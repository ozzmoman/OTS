import User from "../model/user.model.js";
import { errorHandler } from '../utils/error.js';

export const signup = async (req, res, next) => {
    const { email, username, tel, password } =  req.body;
    const newUser = new User({ email, username, tel, password });
    
    try{
    await newUser.save();
    res.status(201).json("User created succesfully");

    } catch(error) {
        next(error);
    }
};