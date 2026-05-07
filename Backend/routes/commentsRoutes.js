import express from "express"
import {addComments, getComments} from "../controllers/commentsController.js"
import authMiddleware from "../middleware/authMiddleware.js"

let commentRoutes = express.Router()

commentRoutes.post("/:id", addComments)
commentRoutes.get("/admin", authMiddleware, getComments)

export default commentRoutes
