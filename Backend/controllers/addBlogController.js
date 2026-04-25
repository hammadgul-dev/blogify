import {v2 as cloudinary} from "cloudinary"
import addBlogModel from "../models/addBlogModel.js"

async function handleAddBlog(req, resp) {
  try {
    let {title, subtitle, description, category} = req.body
    let file = req.file
    let userId = req.user.userId

    if (!file)
      return resp.status(400).json({message: "Please upload a thumbnail"})
    if (!title) return resp.status(400).json({message: "Title is required"})
    if (!subtitle)
      return resp.status(400).json({message: "Subtitle is required"})
    if (!description)
      return resp.status(400).json({message: "Description is required"})
    if (!category)
      return resp.status(400).json({message: "Category is required"})

    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    })

    let uploadResult = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({folder: "blogify/post-thumbnails"}, (error, result) => {
          if (error) reject(error)
          else resolve(result)
        })
        .end(file.buffer)
    })

    let newBlog = await addBlogModel.create({
      userId,
      thumbnail: uploadResult.secure_url,
      title,
      subtitle,
      description,
      category,
    })

    return resp
      .status(201)
      .json({message: "Blog Added Successfully", blog: newBlog})
  } catch (e) {
    return resp.status(500).json({message: "Error During Blog Adding"})
  }
}

export {handleAddBlog}
