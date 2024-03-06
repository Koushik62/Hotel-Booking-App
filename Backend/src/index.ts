import express from 'express';
import cors from 'cors';
import "dotenv/config";
import mongoose from 'mongoose'

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);


app.get("/api/test", async(req,res)=>{
    res.json({message:"hello from express endpoint!"});
});

app.listen(7000,()=>{
    console.log("server running on local host 7000");
})

