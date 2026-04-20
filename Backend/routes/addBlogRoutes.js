import express from "express"
import authMiddleware from "../middleware/authMiddleware.js"
import { handleAddBlog } from "../controllers/addBlogController.js"
import upload from "../middleware/upload.js"

let addBlogRoutes = express.Router()

addBlogRoutes.post("/" , authMiddleware , upload.single("thumbnail") , handleAddBlog)

export default addBlogRoutes