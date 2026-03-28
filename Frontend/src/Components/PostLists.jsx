import style from "../Components Style/PostLists.module.css"
import PostCards from "./PostCards"

function PostLists() {
  return (
    <div className={style["blogList-section"]}>
      <PostCards />
    </div>
  )
}

export default PostLists