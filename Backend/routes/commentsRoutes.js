import express from "express"
import {
  addComments,
  deleteComment,
  getComments,
} from "../controllers/commentsController.js"
import authMiddleware from "../middleware/authMiddleware.js"

let commentRoutes = express.Router()

commentRoutes.post("/:id", addComments)
commentRoutes.get("/admin", authMiddleware, getComments)
cocommentRoutes.delete(
  "/delete/:blogId/:commentId",
  authMiddleware,
  deleteComment,
)

export default commentRoutes
