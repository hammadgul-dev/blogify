import express from "express"
import authMiddleware from "../middleware/authMiddleware.js"
import {
  getAdminBlogs,
  getSingleBlogs,
  handleDeleteBlog,
  togglePublish,
} from "../controllers/blogController.js"
let blogRoutes = express.Router()

blogRoutes.get("/", authMiddleware, getAdminBlogs)
blogRoutes.get("/:id", getSingleBlogs)
blogRoutes.delete("/:id", authMiddleware, handleDeleteBlog)
blogRoutes.patch("/:id", authMiddleware, togglePublish)

export default blogRoutes
