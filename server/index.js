import express from "express"
import cors from "cors"
import {v4 as uuidv4}  from "uuid"
import bcrypt from "bcrypt"
import { StreamChat } from "stream-chat"
import dotenv from "dotenv"
dotenv.config();

const app = express()
app.use(cors())
app.use(express.json())

const API_KEY = process.env.API_KEY
const API_SECRET = process.env.API_SECRET
const serverClient = StreamChat.getInstance(API_KEY, API_SECRET)


app.post("/signup", async (req, res) => {
    try{
        const {firstName, lastName, userName, passWord} = req.body
        const userId = uuidv4()
        const hashedPassword = await bcrypt.hash(passWord, 10);
        const token = serverClient.createToken(userId);
        res.json({token, userId, firstName, lastName, userName, hashedPassword})

    }catch(err){
        res.json(err)
    }
    
})

app.post("/login", async(req, res) => {
    try{
        const {userName, passWord} = req.body; 
        const {users}  = await serverClient.queryUsers({name : userName});
        if(users.length === 0) return res.json({message : "User not found"})
    
        const token = serverClient.createToken(users[0].id);
        const passWordMatch = await bcrypt.compare(passWord, users[0].hashedPassword);
    
        if(passWordMatch){
            res.json({
                token,
                userId: users[0].id,
                firstName: users[0].firstName,
                lastName: users[0].lastName,
                userName
            });
    }
    }catch(err){
        console.log("error: ", err);
    }
})

app.listen(3001, () => {
    console.log("Server running 30001");
})