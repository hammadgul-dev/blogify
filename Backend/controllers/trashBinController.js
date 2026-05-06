import blogModel from "../models/addBlogModel.js"

async function permanentDeleteBlog(req, resp) {
  try {
    let {id} = req.params
    let blog = await blogModel.findByIdAndDelete(id)
    if (!blog) return resp.status(404).json({message: "Blog Not Found"})
    return resp.status(200).json({message: "Blog Permanently Deleted"})
  } catch (e) {
    return resp
      .status(500)
      .json({success: false, message: "Blog Deletion Failed"})
  }
}

async function handleRestoreBlog(req, resp) {
  try {
    let {id} = req.params
    let blog = await blogModel.findByIdAndUpdate(
      id,
      {isDeleted: false},
      {new: true},
    )
    if (!blog) return resp.status(404).json({message: "Blog Not Found"})
    return resp.status(200).json({message: "Blog Restored"})
  } catch (e) {
    return resp
      .status(500)
      .json({success: false, message: "Blog Restore Failed"})
  }
}

export {permanentDeleteBlog, handleRestoreBlog}
