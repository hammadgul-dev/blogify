import style from "../Pages Style/BlogDetail.module.css"
import Navbar from "../Components/Navbar"
import img1 from "../assets/1.jpg"
import PostComment from "../Components/PostComment"
import {useNavigate, useParams} from "react-router-dom"
import {useQuery} from "@tanstack/react-query"
import Footer from "../Components/Footer"
import {useEffect} from "react"

function BlogDetail() {
  let navigate = useNavigate()
  let {id} = useParams()

  let {data, isLoading} = useQuery({
    queryKey: ["blog", id],
    queryFn: async () => {
      let res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/blog/public/${id}`,
      )
      return res.json()
    },
    refetchOnWindowFocus: false,
  })

  useEffect(() => {
    if (data && !data.blog) {
      navigate("/")
    }
  }, [data])
  if (isLoading) return null

  return (
    <div className={style["blogdetail"]}>
      <Navbar />
      <div className={style["blog-header"]}>
        <span className={style["date"]}>
          {new Date(data?.blog?.createdAt).toDateString()}
        </span>
        <h1>{data?.blog?.title}</h1>
        <p className={style["subtitle"]}>{data?.blog?.subtitle}</p>
      </div>
      <div className={style["blog-img"]}>
        <img src={data?.blog?.thumbnail} alt="blog thumbnail" />
      </div>
      <div
        className={style["blog-content"]}
        dangerouslySetInnerHTML={{__html: data?.blog?.description}}
      />
      <PostComment blogId={data?.blog?._id} comments={data?.blog?.comments} />
      <Footer />
    </div>
  )
}

export default BlogDetail
