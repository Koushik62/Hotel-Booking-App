import express from 'express';
import cors from 'cors';
import "dotenv/config";
import mongoose from 'mongoose'
import userRoutes from "./routes/users"

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);

app.use("/api/users", userRoutes);

app.listen(7000,()=>{
    console.log("server running on local host 7000");
})

