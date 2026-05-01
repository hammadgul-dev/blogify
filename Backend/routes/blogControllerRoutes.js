import express from "express"
import authMiddleware from "../middleware/authMiddleware.js"
import {getAllBlog} from "../controllers/blogController.js"
let blogRoutes = express.Router()

blogRoutes.get("/", authMiddleware, getAllBlog)

export default blogRoutes
