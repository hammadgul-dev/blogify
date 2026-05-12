import style from "../Pages Style/AddBlog.module.css"
import {MdCloudUpload} from "react-icons/md"
import {BsStars} from "react-icons/bs"
import {useState, useRef, useEffect} from "react"
import ReactQuill from "react-quill-new"
import "react-quill-new/dist/quill.snow.css"
import {useDispatch} from "react-redux"
import {setMessage} from "../../Redux/Slice/NotificationSlice"
import apiFetch from "../../helper/apiFetch"
import {useParams} from "react-router-dom"
import {useQuery, useMutation} from "@tanstack/react-query"

let modules = {
  toolbar: [
    [{header: [1, 2, 3, false]}],
    ["bold", "italic", "underline", "strike"],
    [{list: "ordered"}, {list: "bullet"}],
    ["link"],
    ["clean"],
  ],
}

function AddBlog({isEdit = false}) {
  let {id} = useParams()
  let dispatch = useDispatch()
  let imgRef = useRef()
  let [description, setDescription] = useState("")
  let [imgPreview, setImgPreview] = useState("")
  let [imgFile, setImgFile] = useState(null)
  let [blogInfo, setBlogInfo] = useState({
    title: "",
    subtitle: "",
    category: "",
  })

  let blogData = useQuery({
    queryKey: ["blog", id],
    queryFn: async () => {
      let apiData = await apiFetch(
        `${import.meta.env.VITE_BACKEND_URL}/blog/${id}`,
      )
      return apiData
    },
    refetchOnWindowFocus: false,
  })

  useEffect(() => {
    if (blogData.data?.blog) {
      let b = blogData.data.blog
      setBlogInfo({title: b.title, subtitle: b.subtitle, category: b.category})
      setDescription(b.description)
      setImgPreview(b.thumbnail)
    }
  }, [blogData.data])

  let updateFormData = useMutation({
    mutationFn: async (formData) => {
      let apiResp = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/blog/${id}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
          },
          body: formData,
        },
      )
      let apiData = await apiResp.json()
      if (!apiResp.ok) throw apiData.message
      return apiData
    },
    onSuccess: (data) => dispatch(setMessage(data.message)),
    onError: (e) =>
      dispatch(setMessage(e?.message || e || "Something Went Wrong")),
  })

  function handleFile(e) {
    let file = e.target.files[0]
    if (!file) return dispatch(setMessage("Files Not Found"))
    setImgPreview(URL.createObjectURL(file))
    setImgFile(file)
  }

  function handleSubmit() {
    if (!isEdit && !imgFile)
      return dispatch(setMessage("Please upload a thumbnail"))
    if (!blogInfo.title.trim()) return dispatch(setMessage("Title is required"))
    if (!blogInfo.subtitle.trim())
      return dispatch(setMessage("Subtitle is required"))
    if (!description.trim())
      return dispatch(setMessage("Blog description is required"))
    if (!blogInfo.category)
      return dispatch(setMessage("Please select a category"))

    let formData = new FormData()
    formData.append("thumbnail", imgFile)
    formData.append("title", blogInfo.title.trim())
    formData.append("subtitle", blogInfo.subtitle.trim())
    formData.append("description", description.trim())
    formData.append("category", blogInfo.category.trim().toLowerCase())
    if (isEdit) {
      updateFormData.mutate(formData)
    } else {
      postFormData.mutate(formData)
    }
  }

  let postFormData = useMutation({
    mutationFn: async (formData) => {
      let apiResp = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/add-blog`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
          },
          body: formData,
        },
      )
      let apiData = await apiResp.json()
      if (!apiResp.ok) throw apiData.message
      return apiData
    },
    onSuccess: (data) => {
      dispatch(setMessage(data?.message || "Blog added successfully!"))
      setBlogInfo({
        title: "",
        subtitle: "",
        category: "",
        publish: false,
      })
      setDescription("")
      setImgFile(null)
      setImgPreview("")
    },
    onError: (e) =>
      dispatch(setMessage(e?.message || e || "Something Went Wrong")),
  })

  let handleGenerateDescription = useMutation({
    mutationFn: async () => {
      if (!blogInfo.title.trim()) throw "Please Enter A Title First"
      let apiData = await apiFetch(
        `${import.meta.env.VITE_BACKEND_URL}/add-blog/generate-description`,
        {
          method: "POST",
          body: {title: blogInfo.title},
        },
      )
      return apiData
    },
    onSuccess: (data) => {
      setDescription(data.description)
      dispatch(setMessage(data.message))
    },
    onError: (e) =>
      dispatch(setMessage(e?.message || e || "Something Went Wrong")),
  })

  let handleAiThumbnail = useMutation({
    mutationFn: async () => {
      if (!description.trim()) throw "Description is required"
      if (description.length < 30) throw "Description is Too Short"
      let apiData = await apiFetch(
        `${import.meta.env.VITE_BACKEND_URL}/add-blog/generate-thumbnail`,
        {
          method: "POST",
          body: {description: description},
        },
      )
      return apiData
    },
    onSuccess: async (data) => {
      setImgPreview(data.image)
      let res = await fetch(data.image)
      let blob = await res.blob()
      let file = new File([blob], "ai-thumbnail.jpg", {type: "image/jpeg"})
      setImgFile(file)
    },
    onError: (e) => {
      dispatch(setMessage(e?.message || e || "Failed To Generate Thumbnail"))
    },
  })

  return (
    <div className={style["addblog"]}>
      <div className={style["addblog-card"]}>
        <div className={style["form-group"]}>
          <div className={style["label-row"]}>
            <label>Upload Thumbnail</label>
            <button
              className={style["ai-img-btn"]}
              onClick={() => handleAiThumbnail.mutate()}
              disabled={handleAiThumbnail.isPending}
            >
              <BsStars />{" "}
              {handleAiThumbnail.isPending
                ? "Generating..."
                : "Generate with AI"}
            </button>
          </div>
          <div
            onClick={() => imgRef.current.click()}
            className={style["upload-box"]}
          >
            <input
              style={{display: "none"}}
              type="file"
              accept=".png,.jpg,.jpeg"
              ref={imgRef}
              onChange={handleFile}
            />
            {imgPreview ? (
              <img src={imgPreview} alt="Post-Thumbnail" />
            ) : (
              <>
                <MdCloudUpload />
                <span>Upload</span>
              </>
            )}
          </div>
        </div>

        <div className={style["form-group"]}>
          <label>Blog Title</label>
          <input
            type="text"
            placeholder="Type here"
            value={blogInfo.title}
            onChange={(e) => setBlogInfo({...blogInfo, title: e.target.value})}
          />
        </div>

        <div className={style["form-group"]}>
          <label>Sub Title</label>
          <input
            type="text"
            placeholder="Type here"
            value={blogInfo.subtitle}
            onChange={(e) =>
              setBlogInfo({...blogInfo, subtitle: e.target.value})
            }
          />
        </div>

        <div className={style["form-group"]}>
          <label>Blog Description</label>
          <div className={style["editor-wrapper"]}>
            <div className={style["toolbar-scroll"]}>
              <ReactQuill
                theme="snow"
                value={description}
                onChange={setDescription}
                modules={modules}
                placeholder="Write your blog here..."
                className={style["editor"]}
              />
            </div>
          </div>
          <button
            onClick={() => handleGenerateDescription.mutate()}
            className={style["ai-btn"]}
            disabled={handleGenerateDescription.isPending}
          >
            <BsStars />{" "}
            {handleGenerateDescription.isPending
              ? "Generating..."
              : "Generate with AI"}
          </button>
        </div>

        <div className={style["wrapper"]}>
          <div className={style["form-group"]}>
            <label>Blog Category</label>
            <select
              value={blogInfo.category}
              onChange={(e) =>
                setBlogInfo({
                  ...blogInfo,
                  category: e.target.value,
                })
              }
            >
              <option value="">Select category</option>
              <option value="tech">Tech</option>
              <option value="business">Business</option>
              <option value="health">Health</option>
              <option value="travel">Travel</option>
              <option value="education">Education</option>
              <option value="finance">Finance</option>
              <option value="career">Career</option>
            </select>
          </div>
        </div>

        <div className={style["submit-row"]}>
          <button
            onClick={handleSubmit}
            className={style["submit-btn"]}
            disabled={postFormData.isPending || updateFormData.isPending}
          >
            {isEdit
              ? updateFormData.isPending
                ? "Updating..."
                : "Update Blog"
              : postFormData.isPending
                ? "Adding..."
                : "Add Blog"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddBlog
