import express from "express";
import dotenv from "dotenv"
import cors from "cors"

import Connection from "./database/db.js";
import router from "./routes/Route.js";

dotenv.config()

const app = express();

app.use(cors())
app.use(express.json())
app.use('/',router)


const MONGO_URI = process.env.MONGOURI

Connection(MONGO_URI);

if(process.env.NODE_ENV=="production"){
    app.use(express.static('frontend/build'))
    const path = require('path')
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'../frontend','build','index.html'))
    })
}


const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})