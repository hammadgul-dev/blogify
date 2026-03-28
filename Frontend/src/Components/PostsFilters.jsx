import style from "../Components Style/PostsFilters.module.css"

function PostsFilters() {
  return (
    <div className={style["postsFilter-section"]}>
      <span>All</span>
      <span>Tech</span>
      <span>Business</span>
      <span>Health</span>
      <span>Travel</span>
      <span>Education</span>
      <span>Finance</span>
      <span>Career</span>
    </div>
  )
}

export default PostsFilters