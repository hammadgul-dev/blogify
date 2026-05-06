import express from "express"
import authMiddleware from "../middleware/authMiddleware.js"
import {permanentDeleteBlog} from "../controllers/trashBinController.js"

let trashBinRoutes = express.Router()

trashBinRoutes.delete("/:id", authMiddleware, permanentDeleteBlog)

export default trashBinRoutes
