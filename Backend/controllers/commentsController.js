import blogModel from "../models/addBlogModel.js"

async function addComments(req, resp) {
  try {
    let {id} = req.params
    let {name, comment} = req.body
    if (!name) return resp.status(400).json({message: "Name is required"})
    if (!comment) return resp.status(400).json({message: "Comment is required"})

    let blog = await blogModel.findByIdAndUpdate(id, {
      $push: {comments: {name, comment}},
    })
    if (!blog) return resp.status(404).json({message: "Blog Not Found"})
    return resp
      .status(200)
      .json({success: true, message: "Comment submitted for review"})
  } catch (e) {
    return resp.status(500).json({message: "Failed to add comment"})
  }
}

async function getComments(req, resp) {
  try {
    let blogs = await blogModel
      .find({userId: req.user.userId, isDeleted: false})
      .select("title comments")
    return resp.status(200).json({success: true, blogs})
  } catch (e) {
    return resp
      .status(500)
      .json({success: false, message: "Failed to fetch comments"})
  }
}

async function deleteComment(req, resp) {
  try {
    let {blogId, commentId} = req.params
    let blog = await blogModel.findByIdAndUpdate(
      blogId,
      {$pull: {comments: {_id: commentId}}},
      {new: true},
    )
    if (!blog) return resp.status(404).json({message: "Blog Not Found"})
    return resp.status(200).json({message: "Comment Deleted"})
  } catch (e) {
    return resp.status(500).json({message: "Failed To Delete Comment"})
  }
}

async function approveAllComment(req, resp) {
  try {
    let {blogId} = req.params
    let blog = await blogModel.findByIdAndUpdate(
      blogId,
      {$set: {"comments.$[].isApproved": true}},
      {new: true},
    )
    if (!blog) return resp.status(404).json({message: "Blog Not Found"})
    resp
      .status(200)
      .json({message: "All Comments Approved", comments: blog.comments})
  } catch (e) {
    return resp.status(500).json({message: "Failed To Approve Comment"})
  }
}

export {addComments, getComments, deleteComment, approveAllComment}
