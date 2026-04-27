import style from "../Pages Style/BlogDetail.module.css"
import Navbar from "../Components/Navbar"
import img1 from "../assets/1.jpg"
import PostComment from "../Components/PostComment"

function BlogDetail() {
  return (
    <div className={style["blogdetail"]}>
      <Navbar />
      <div className={style["blog-header"]}>
        <span className={style["date"]}>Posted on May 28, 2025</span>
        <h1>Enhancing Your Skills and Capturing Memorable Moments</h1>
        <p className={style["subtitle"]}>
          Enhancing Your Skills and Capturing Memorable Moments
        </p>
      </div>
      <div className={style["blog-img"]}>
        <img src={img1} alt="blog" />
      </div>
      <div className={style["blog-content"]}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum unde
          quaerat eveniet cumque accusamus atque qui error quo enim fugiat?
          Lorem ipsum dolor sit amet consectetur adipisicing elLorem ipsum dolor
          sit amet consectetur adipisicing elLorem ipsum dolor sit amet
          consectetur adipisicing elLorem ipsum dolor sit amet consectetur
          adipisicing elLorem ipsum dolor sit amet consectetur adipisicing
          elLorem ipsum dolor sit amet consectetur adipisicing el
        </p>
      </div>
      <PostComment />
    </div>
  )
}

export default BlogDetail
