import style from "../Components Style/PostCards.module.css"
import img from "../assets/1.jpg"
import {useNavigate} from "react-router-dom"

function PostCards({blog}) {
  let navigate = useNavigate()
  return (
    <div
      className={style["post-card"]}
      onClick={() => navigate(`/blog/${blog._id}`)}
    >
      <div className={style["post-img"]}>
        <img src={blog.thumbnail} alt="blog thumbnail" />
      </div>
      <div className={style["post-info"]}>
        <h3 className={style["post-title"]}>{blog.title}</h3>
        <p className={style["post-subtitle"]}>{blog.subtitle}</p>
      </div>
    </div>
  )
}

export default PostCards
