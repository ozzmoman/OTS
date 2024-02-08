import User from "../model/user.model.js";

export const signup = async (req, res) => {
    const { email, username, tel, password } =  req.body;
    const newUser = new User({ email, username, tel, password });
    
    try{
    await newUser.save();
    res.status(201).json("User created succesfully");

    } catch(error) {
        res.status(500).json(error.message);
    }
};