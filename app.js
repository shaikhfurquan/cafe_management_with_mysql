import express from "express";
import 'dotenv/config'
import cors from 'cors'
import connectDB from "./db/connectionDB.js";

const app = express()

app.use(express.json())
app.use(cors())



connectDB().then(() => {
    app.listen(process.env.PORT || 5000, () => {
        console.log(`Server listening on ${process.env.PORT}`);
    })
}).catch(() => {
    console.log('Error while connecting to db');
})