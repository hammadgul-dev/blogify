import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import cors from "cors"
import userAuthRoutes from "./routes/userAuthRoutes.js"

dotenv.config()
const app = express()

connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors({
    origin : process.env.FRONTEND_URL,
    credentials : true,
}))

// Routes
app.use("/auth" , userAuthRoutes)

app.use("/" , (req , resp)=>{
    resp.status(200).send("Welcome To HOME PAGE")
})

app.listen(process.env.PORT || 5000)