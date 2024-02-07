import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGODB).then(() => {
    console.log('Connect to MongoDB!');
}).catch((err) => {
    console.log(err);
});

const app = express();

app.listen(4000, () => {
    console.log('Server run in 4000..');
})

app.get("/api", (req, res) => {
    res.json({ message: "Hello world" });
});