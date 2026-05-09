import {useQuery} from "@tanstack/react-query"
import {useSelector} from "react-redux"
import style from "../Components Style/PostLists.module.css"
import PostCards from "./PostCards"

function PostLists() {
  let currCategory = useSelector((state) => state.postFilter.category)

  let {data} = useQuery({
    queryKey: ["public-post"],
    queryFn: async () => {
      let res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/blog/public`)
      return res.json()
    },
    refetchOnWindowFocus: false,
  })
  console.log(data)

  let filteredBlogs = currCategory
    ? data?.blog?.filter((b) => b.category === currCategory.toLowerCase())
    : data?.blog

  return (
    <div className={style["blogList-section"]}>
      {Array.isArray(filteredBlogs) && filteredBlogs.length > 0 ? (
        filteredBlogs.map((blog) => <PostCards key={blog._id} blog={blog} />)
      ) : (
        <p className={style["no-blogs"]}>No posts published yet</p>
      )}
    </div>
  )
}

export default PostLists
