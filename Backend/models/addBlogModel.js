import mongoose from "mongoose"

let addBlogSchema = new mongoose.Schema(
  {
    userId: {type: mongoose.Schema.ObjectId, ref: "user_auth", required: true},
    thumbnail: {type: String, required: true},
    title: {type: String, required: true, unique: true, trim: true},
    subtitle: {type: String, required: true, trim: true},
    description: {type: String, required: true, trim: true},
    category: {type: String, required: true, trim: true},
    isPublish: {type: Boolean, default: false},
    isDeleted: {type: Boolean, default: false},
    comments: [
      {
        name: {type: String, required: true, trim: true},
        comment: {type: String, required: true, trim: true},
      },
    ],
  },
  {timestamps: true},
)

let addBlogModel = mongoose.model("blog_post", addBlogSchema)
export default addBlogModel
