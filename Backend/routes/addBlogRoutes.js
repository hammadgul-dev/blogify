import express from "express"
import authMiddleware from "../middleware/authMiddleware.js"
import {
  generateDescription,
  handleAddBlog,
} from "../controllers/addBlogController.js"
import upload from "../middleware/upload.js"

let addBlogRoutes = express.Router()

addBlogRoutes.post(
  "/",
  authMiddleware,
  upload.single("thumbnail"),
  handleAddBlog,
)
addBlogRoutes.post("/generate-description", authMiddleware, generateDescription)

export default addBlogRoutes
