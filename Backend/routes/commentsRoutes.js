import express from "express"
import {
  addComments,
  approveAllComment,
  deleteComment,
  getComments,
} from "../controllers/commentsController.js"
import authMiddleware from "../middleware/authMiddleware.js"

let commentRoutes = express.Router()

commentRoutes.post("/:id", addComments)
commentRoutes.get("/admin", authMiddleware, getComments)
commentRoutes.delete(
  "/delete/:blogId/:commentId",
  authMiddleware,
  deleteComment,
)
commentRoutes.patch("/approve/:blogId", authMiddleware, approveAllComment)

export default commentRoutes
