import express from "express"
import { handleSignupForm } from "../controllers/userAuthController.js"

let userAuthRoutes = express.Router()

userAuthRoutes.post("/signup" , handleSignupForm )

export default userAuthRoutes