import {useMutation, useQuery} from "@tanstack/react-query"
import style from "../Components Style/PostLists.module.css"
import PostCards from "./PostCards"

function PostLists() {
  let {data} = useQuery({
    queryKey: ["public-post"],
    queryFn: async () => {
      let res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/blog/public`)
      return res.json()
    },
    refetchOnWindowFocus: false,
  })
  console.log(data?.blog)

  return (
    <div className={style["blogList-section"]}>
      {Array.isArray(data?.blog) && data.blog.length > 0 ? (
        data.blog.map((blog) => <PostCards key={blog._id} blog={blog} />)
      ) : (
        <p className={style["no-blogs"]}>No posts published yet</p>
      )}
    </div>
  )
}

export default PostLists
