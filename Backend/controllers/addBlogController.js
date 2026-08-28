import {v2 as cloudinary} from "cloudinary"
import addBlogModel from "../models/addBlogModel.js"
import Groq from "groq-sdk"
import authModel from "../models/userAuthModel.js"
const groq = new Groq({apiKey: process.env.GROQ_API_KEY})

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
      .json({message: "Blog Added — Not Published Yet", blog: newBlog})
  } catch (e) {
    return resp.status(500).json({message: "Error During Blog Adding"})
  }
}

async function generateDescription(req, resp) {
  try {
    let {title} = req.body
    if (!title) return resp.status(400).json({message: "Title is required"})

    let findingUser = await authModel.findById(req.user.userId)
    if (findingUser.aiDescription >= 5)
      return resp.status(400).json({message: "AI Description Limit Reached"})
    let completion = await groq.chat.completions.create({
      model: "openai/gpt-oss-120b",
      messages: [
        {
          role: "user",
          content: `Write a detailed blog post for this title: "${title}". Format it with <h2> headings, <h3> subheadings, and <p> paragraphs. Return only valid HTML content, no extra text, no markdown.`,
        },
      ],
    })
    let description = completion.choices[0].message.content
    await authModel.findByIdAndUpdate(req.user.userId, {
      $inc: {aiDescription: 1},
    })
    return resp
      .status(200)
      .json({message: "Description Generated!", description: description})
  } catch (e) {
    return resp.status(500).json({message: "Failed To Generate Description"})
  }
}

async function generateThumbnail(req, resp) {
  try {
    let {description} = req.body
    if (!description)
      return resp.status(400).json({message: "Description is required"})
    if (description.length < 30)
      return resp.status(400).json({message: "Description is Too Short"})

    let findingUser = await authModel.findById(req.user.userId)
    if (findingUser.aiThumbnail >= 5)
      return resp.status(400).json({message: "AI Thumbnail Limit Reached"})

    let cleanDescription = description
      .replace(/<[^>]*>/g, " ")
      .replace(/\s+/g, " ")
      .trim()

    let promptCompletion = await groq.chat.completions.create({
      model: "openai/gpt-oss-120b",
      messages: [
        {
          role: "user",
          content: `${process.env.GROQ_IMAGE_PROMPT} "${cleanDescription.slice(0, 400)}". Return only the prompt.`,
        },
      ],
    })

    let imagePrompt = promptCompletion.choices[0].message.content.trim()

    let response = await fetch(`${process.env.CLOUDFLARE_API_URL}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.CLOUDFLARE_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: `${process.env.THUMBNAIL_PROMPT} ${imagePrompt}`,
        steps: 8,
        width: 1024,
        height: 576,
      }),
    })

    let jsonResp = await response.json()
    let base64 = jsonResp.result.image

    await authModel.findByIdAndUpdate(req.user.userId, {$inc: {aiThumbnail: 1}})
    return resp.status(200).json({
      message: "Image Generated!",
      image: `data:image/jpeg;base64,${base64}`,
    })
  } catch (e) {
    return resp.status(500).json({message: "Failed To Generate Thumbnail"})
  }
}

export {handleAddBlog, generateDescription, generateThumbnail}
