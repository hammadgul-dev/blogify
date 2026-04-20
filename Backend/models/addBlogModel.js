import mongoose from "mongoose"

let addBlogSchema = new mongoose.Schema(
  {
    thumbnail: {type: String, required: true},
    title: {type: String, required: true, unique: true, trim: true},
    subtitle: {type: String, required: true, trim: true},
    description: {type: String, required: true, trim: true},
    category: {type: String, required: true, trim: true},
    isPublish: {type: Boolean, default: false},
  },
  {timestamps: true},
)

let addBlogModel = mongoose.model("blog_post", addBlogSchema)
export default addBlogModel
