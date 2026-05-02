import blogModel from "../models/addBlogModel.js"

async function getSingleBlogs(req, resp) {
  try {
    let {id} = req.params
    let singleBlogs = await blogModel.findById(id)
    console.log(singleBlogs)
    if (singleBlogs)
      return resp
        .status(200)
        .json({message: "Blogs Fetched!", singleBlogs: singleBlogs})
  } catch (e) {
    return resp.status(500).json({message: "Failed To Fetch Blogs"})
  }
}

async function getAdminBlogs(req, resp) {
  try {
    let blog = await blogModel
      .find({userId: req.user.userId})
      .select("title isPublish createdAt")
    console.log(blog)
    if (blog)
      return resp.status(200).json({message: "Blogs Fetched!", adminBlog: blog})
  } catch (e) {
    return resp.status(500).json({message: "Failed To Fetch Blogs"})
  }
}

async function handleDeleteBlog(req, resp) {
  try {
    let {id} = req.params
    let deletedBlog = await blogModel.findByIdAndDelete(id)
    if (!deletedBlog) return resp.status(404).json({message: "Blog Not Found"})
    return resp.status(200).json({message: "Blog Deleted!"})
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

export {getSingleBlogs, getAdminBlogs, handleDeleteBlog, togglePublish}
