import express from "express"
import {
  handleLoginForm,
  handleSignupForm,
} from "../controllers/userAuthController.js"
import authMiddleware from "../middleware/authMiddleware.js"

let userAuthRoutes = express.Router()

userAuthRoutes.post("/signup", handleSignupForm)
userAuthRoutes.post("/login", handleLoginForm)
router.get("/verify", authMiddleware, verifyUser)

export default userAuthRoutes
