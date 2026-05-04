import express from "express"
import authMiddleware from "../middleware/authMiddleware.js"
import {
  getBlogById,
  getAdminBlogs,
  handleDeleteBlog,
  togglePublish,
  updateBlog,
  getTrashBlogs,
} from "../controllers/blogController.js"
import upload from "../middleware/upload.js"
let blogRoutes = express.Router()

blogRoutes.get("/", authMiddleware, getAdminBlogs)
blogRoutes.get("/trash", authMiddleware, getTrashBlogs)
blogRoutes.get("/:id", authMiddleware, getBlogById)
blogRoutes.delete("/:id", authMiddleware, handleDeleteBlog)
blogRoutes.patch("/:id", authMiddleware, togglePublish)
blogRoutes.put("/:id", authMiddleware, upload.single("thumbnail"), updateBlog)

export default blogRoutes
