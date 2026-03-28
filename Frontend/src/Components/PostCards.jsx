import style from "../Components Style/PostCards.module.css"
import img from "../assets/1.jpg"

function PostCards() {
    return (
        <div className={style["post-card"]}>
            <div className={style["post-img"]}>
                <img src={img} alt="bg img" />
            </div>
            <div className={style["post-info"]}>
                <span className={style["post-category"]}>Education</span>
                <h3 className={style["post-title"]}>
                    this is my post dont touch this
                </h3>
                <p className={style["post-subtitle"]}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nam commodi
                </p>
            </div>
        </div>
    )
}

export default PostCards