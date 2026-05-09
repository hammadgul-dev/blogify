import "./config/env.js"
import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import cors from "cors"
import userAuthRoutes from "./routes/userAuthRoutes.js"
import addBlogRoutes from "./routes/addBlogRoutes.js"
import blogRoutes from "./routes/blogControllerRoutes.js"
import trashBinRoutes from "./routes/trashBinRoutes.js"
import commentRoutes from "./routes/commentsRoutes.js"
import "./config/passport.js"
import passport from "passport"
import helmet from "helmet"

const app = express()

connectDB()

app.use(helmet())
app.use(express.json())
app.use(passport.initialize())
app.use(express.urlencoded({extended: false}))
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  }),
)

// Routes
app.use("/auth", userAuthRoutes)
app.use("/add-blog", addBlogRoutes)
app.use("/blog", blogRoutes)
app.use("/trash", trashBinRoutes)
app.use("/comment", commentRoutes)

app.use("/", (req, resp) => {
  resp.status(200).send("Welcome To HOME PAGE")
})

app.listen(process.env.PORT || 5000)
