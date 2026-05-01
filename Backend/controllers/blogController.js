import blogModel from "../models/addBlogModel.js"

async function getAllBlog(req, resp) {
  try {
    let allBlog = await blogModel.find({userId: req.user.userId})
    console.log(allBlog)
    if (allBlog)
      return resp
        .status(200)
        .json({message: "Blogs Fetched!", allBlogPost: allBlog})
  } catch (e) {
    return resp.status(500).json({message: "Failed To Fetch Blogs"})
  }
}

export {getAllBlog}
