import express from "express"
import {
  handleLoginForm,
  handleSignupForm,
  verifyUser,
  googleAuthCallback,
} from "../controllers/userAuthController.js"
import authMiddleware from "../middleware/authMiddleware.js"
import passport from "passport"

let userAuthRoutes = express.Router()

userAuthRoutes.post("/signup", handleSignupForm)
userAuthRoutes.post("/login", handleLoginForm)
userAuthRoutes.get("/verify", authMiddleware, verifyUser)
userAuthRoutes.get(
  "/google",
  passport.authenticate("google", {scope: ["profile", "email"]}),
)
userAuthRoutes.get(
  "/google/callback",
  passport.authenticate("google", {
    session: false,
    failureRedirect: "/auth/failed",
  }),
  googleAuthCallback,
)

export default userAuthRoutes
