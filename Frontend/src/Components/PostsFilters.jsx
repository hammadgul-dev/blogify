import style from "../ComponentsStyle/PostsFilters.module.css"
import {useSelector, useDispatch} from "react-redux"
import {setCategory} from "../Redux/Slice/PostsFilters"

function PostsFilters() {
  let dispatch = useDispatch()
  let currCategory = useSelector((state) => state.postFilter.category)

  let categories = [
    "All",
    "Tech",
    "Business",
    "Health",
    "Travel",
    "Education",
    "Finance",
    "Career",
  ]

  return (
    <div className={style["postsFilter-section"]}>
      {categories.map((cat) => (
        <span
          key={cat}
          className={
            currCategory === cat || (cat === "All" && !currCategory)
              ? style["active"]
              : ""
          }
          onClick={() => dispatch(setCategory(cat === "All" ? null : cat))}
        >
          {cat}
        </span>
      ))}
    </div>
  )
}

export default PostsFilters
