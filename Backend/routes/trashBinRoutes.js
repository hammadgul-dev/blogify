import express from "express"
import authMiddleware from "../middleware/authMiddleware.js"
import {
  handleRestoreBlog,
  permanentDeleteBlog,
} from "../controllers/trashBinController.js"

let trashBinRoutes = express.Router()

trashBinRoutes.delete("/:id", authMiddleware, permanentDeleteBlog)
trashBinRoutes.patch("/restore/:id", authMiddleware, handleRestoreBlog)

export default trashBinRoutes
