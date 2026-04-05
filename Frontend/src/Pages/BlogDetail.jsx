import style from "../Pages Style/BlogDetail.module.css"
import Navbar from "../Components/Navbar"
import img1 from "../assets/1.jpg"
// import CommentSection from "../Components/CommentSection"

function BlogDetail() {
    return (
        <div className={style["blogdetail"]}>
            <Navbar />
            <div className={style["blog-header"]}>
                <div className={style["blog-meta"]}>
                    <span className={style["author"]}>Michael Brown</span>
                    <span className={style["date"]}>May 28th 2025</span>
                </div>
                <h1>Enhancing Your Skills and Capturing Memorable Moments</h1>
                <p className={style["subtitle"]}>Enhancing Your Skills and Capturing Memorable Moments</p>
            </div>
            <div className={style["blog-img"]}>
                <img src={img1} alt="blog" />
            </div>
            <div className={style["blog-content"]}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum unde quaerat eveniet cumque accusamus atque qui error quo enim fugiat?
                    Lorem ipsum dolor sit amet consectetur adipisicing elLorem ipsum dolor sit amet consectetur adipisicing elLorem ipsum dolor sit amet consectetur adipisicing elLorem ipsum dolor sit amet consectetur adipisicing elLorem ipsum dolor sit amet consectetur adipisicing elLorem ipsum dolor sit amet consectetur adipisicing el
                </p>
            </div>
        </div>
    )
}

export default BlogDetail