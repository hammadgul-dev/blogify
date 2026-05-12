import style from "../PagesStyle/TrashBin.module.css"
import {useQuery, useMutation, useQueryClient} from "@tanstack/react-query"
import apiFetch from "../../helper/apiFetch"
import {useDispatch} from "react-redux"
import {setMessage} from "../../Redux/Slice/NotificationSlice"

function TrashBin() {
  let dispatch = useDispatch()
  let queryClient = useQueryClient()

  let trashBlogs = useQuery({
    queryKey: ["trash-blogs"],
    queryFn: async () => {
      let apiData = await apiFetch(
        `${import.meta.env.VITE_BACKEND_URL}/blog/trash`,
      )
      return apiData
    },
    refetchOnWindowFocus: false,
  })

  let deleteBlogMutation = useMutation({
    mutationFn: async (id) => {
      let apiData = await apiFetch(
        `${import.meta.env.VITE_BACKEND_URL}/trash/${id}`,
        {method: "DELETE"},
      )
      return apiData
    },
    onSuccess: (data) => {
      dispatch(setMessage(data.message))
      queryClient.invalidateQueries(["trash-blogs"])
    },
    onError: (e) => {
      dispatch(setMessage(e || e.message))
    },
  })

  let restoreBlogMutation = useMutation({
    mutationFn: async (id) => {
      let apiData = await apiFetch(
        `${import.meta.env.VITE_BACKEND_URL}/trash/restore/${id}`,
        {method: "PATCH"},
      )
      return apiData
    },
    onSuccess: (data) => {
      dispatch(setMessage(data.message))
      queryClient.invalidateQueries(["trash-blogs"])
    },
    onError: (e) => {
      dispatch(setMessage(e || e.message))
    },
  })

  return (
    <div className={style["trashbin"]}>
      <div className={style["trashbin-wrapper"]}>
        <h2>Trash Bin</h2>
        <div className={style["blog-list"]}>
          {Array.isArray(trashBlogs.data?.trashBlogs) &&
          trashBlogs.data.trashBlogs.length > 0 ? (
            trashBlogs.data.trashBlogs.map((blog) => (
              <div key={blog._id} className={style["blog-row"]}>
                <p>
                  <strong>Blog :</strong> {blog.title}
                </p>
                <button
                  className={style["restore-btn"]}
                  onClick={() => restoreBlogMutation.mutate(blog._id)}
                >
                  Restore
                </button>
                <button
                  className={style["delete-btn"]}
                  onClick={() => deleteBlogMutation.mutate(blog._id)}
                >
                  Delete
                </button>
              </div>
            ))
          ) : (
            <p className={style["no-blogs"]}>Trash Is Empty</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default TrashBin
