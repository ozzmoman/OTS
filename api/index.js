import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

mongoose.connect(process.env.MONGODB).then(() => {
    console.log('Connect to MongoDB!');
}).catch((err) => {
    console.log(err);
});

const app = express();

app.use(express.json());

app.listen(4000, () => {
    console.log('Server run in 4000..');
})

app.use("/api/user", userRouter);

app.use("/api/auth", authRouter);

