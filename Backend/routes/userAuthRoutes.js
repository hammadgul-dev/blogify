import express from "express"
import { handleLoginForm, handleSignupForm } from "../controllers/userAuthController.js"

let userAuthRoutes = express.Router()

userAuthRoutes.post("/signup" , handleSignupForm )
userAuthRoutes.post("/login" , handleLoginForm )

export default userAuthRoutes