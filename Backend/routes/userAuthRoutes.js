import express from "express"
import {
  handleLoginForm,
  handleSignupForm,
  verifyUser,
} from "../controllers/userAuthController.js"
import authMiddleware from "../middleware/authMiddleware.js"

let userAuthRoutes = express.Router()

userAuthRoutes.post("/signup", handleSignupForm)
userAuthRoutes.post("/login", handleLoginForm)
userAuthRoutes.get("/verify", authMiddleware, verifyUser)

export default userAuthRoutes
