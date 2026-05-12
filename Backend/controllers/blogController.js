import blogModel from "../models/addBlogModel.js"
import {v2 as cloudinary} from "cloudinary"

async function getBlogById(req, resp) {
  try {
    let {id} = req.params
    let blog = await blogModel.findById(id)
    if (!blog) return resp.status(404).json({message: "Blog Not Found"})
    return resp.status(200).json({message: "Blog Fetched!", blog})
  } catch (e) {
    return resp.status(500).json({message: "Failed To Fetch Blog"})
  }
}

async function updateBlog(req, resp) {
  try {
    let {id} = req.params
    let {title, subtitle, description, category} = req.body
    let file = req.file
    let updateData = {title, subtitle, description, category}

    if (file) {
      cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
      })

      let uploadResult = await new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream(
            {folder: "blogify/post-thumbnails"},
            (error, result) => {
              if (error) reject(error)
              else resolve(result)
            },
          )
          .end(file.buffer)
      })
      updateData.thumbnail = uploadResult.secure_url
    }

    let updated = await blogModel.findByIdAndUpdate(id, updateData, {new: true})
    if (!updated) return resp.status(404).json({message: "Blog Not Found"})
    return resp.status(200).json({message: "Blog Updated!", blog: updated})
  } catch (e) {
    return resp.status(500).json({message: "Failed To Update Blog"})
  }
}

async function getAdminBlogs(req, resp) {
  try {
    let blog = await blogModel
      .find({userId: req.user.userId, isDeleted: false})
      .select("title isPublish createdAt")
    if (blog)
      return resp.status(200).json({message: "Blogs Fetched!", adminBlog: blog})
  } catch (e) {
    return resp.status(500).json({message: "Failed To Fetch Blogs"})
  }
}

async function handleDeleteBlog(req, resp) {
  try {
    let {id} = req.params
    let blog = await blogModel.findByIdAndUpdate(
      id,
      {isDeleted: true},
      {new: true},
    )
    if (!blog) return resp.status(404).json({message: "Blog Not Found"})
    return resp
      .status(200)
      .json({message: "Blog Moved To Trash!", title: blog.title})
  } catch (e) {
    return resp.status(500).json({message: "Failed To Delete Blog"})
  }
}

async function togglePublish(req, resp) {
  try {
    let {id} = req.params
    let blog = await blogModel.findById(id)
    if (!blog) return resp.status(404).json({message: "Blog Not Found"})
    blog.isPublish = !blog.isPublish
    await blog.save()
    return resp
      .status(200)
      .json({message: blog.isPublish ? "Blog Published!" : "Blog Unpublished!"})
  } catch (e) {
    return resp.status(500).json({message: "Failed To Update Status"})
  }
}

async function getTrashBlogs(req, resp) {
  try {
    let blogs = await blogModel
      .find({userId: req.user.userId, isDeleted: true})
      .select("title")
    return resp.status(200).json({message: "Trash Fetched!", trashBlogs: blogs})
  } catch (e) {
    return resp.status(500).json({message: "Failed To Fetch Trash"})
  }
}

async function getPublicBlogs(req, resp) {
  try {
    let blog = await blogModel
      .find({isDeleted: false, isPublish: true})
      .select("thumbnail title subtitle category")
    return resp.status(200).json({success: true, blog})
  } catch (e) {
    return resp.status(500).json({message: "Failed to fetch blogs"})
  }
}

export {
  getBlogById,
  getAdminBlogs,
  handleDeleteBlog,
  togglePublish,
  updateBlog,
  getTrashBlogs,
  getPublicBlogs,
}
