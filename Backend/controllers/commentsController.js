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

export {addComments}
