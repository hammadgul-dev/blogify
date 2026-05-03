import express from "express"
import authMiddleware from "../middleware/authMiddleware.js"
import {
  getBlogById,
  getAdminBlogs,
  handleDeleteBlog,
  togglePublish,
  updateBlog,
} from "../controllers/blogController.js"
let blogRoutes = express.Router()

blogRoutes.get("/", authMiddleware, getAdminBlogs)
blogRoutes.get("/:id", authMiddleware, getBlogById)
blogRoutes.delete("/:id", authMiddleware, handleDeleteBlog)
blogRoutes.patch("/:id", authMiddleware, togglePublish)
blogRoutes.put("/:id", authMiddleware, updateBlog)

export default blogRoutes
