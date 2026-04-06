import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"

const app = express()

dotenv.config()
connectDB()

app.use(express.json())

app.use("/" , (req , resp)=>{
    resp.status(200).send("Welcome To HOME PAGE")
})

app.listen(process.env.PORT || 5000)