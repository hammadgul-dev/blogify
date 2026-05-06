import express from "express"
import {addComments} from "../controllers/commentsController.js"

let commentRoutes = express.Router()

commentRoutes.post("/:id", addComments)

export default commentRoutes
