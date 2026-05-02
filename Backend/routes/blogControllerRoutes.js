import express from "express"
import authMiddleware from "../middleware/authMiddleware.js"
import {getAdminBlogs, getSingleBlogs} from "../controllers/blogController.js"
let blogRoutes = express.Router()

blogRoutes.get("/", authMiddleware, getAdminBlogs)
blogRoutes.get("/:id", getSingleBlogs)

export default blogRoutes
