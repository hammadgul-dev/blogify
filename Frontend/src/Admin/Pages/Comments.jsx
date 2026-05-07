import style from "../Pages Style/Comments.module.css"
import {AiOutlineDelete} from "react-icons/ai"
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query"
import apiFetch from "../../helper/apiFetch"
import {setMessage} from "../../Redux/Slice/NotificationSlice"
import {useDispatch} from "react-redux"

function Comments() {
  let queryClient = useQueryClient()
  let dispatch = useDispatch()
  let {data} = useQuery({
    queryKey: ["admin-comments"],
    queryFn: async () => {
      let apiData = await apiFetch(
        `${import.meta.env.VITE_BACKEND_URL}/comment/admin`,
      )
      return apiData
    },
    refetchOnWindowFocus: false,
  })

  let deleteCommentMutation = useMutation({
    mutationFn: async ({blogId, commentId}) => {
      let apiData = await apiFetch(
        `${import.meta.env.VITE_BACKEND_URL}/comment/delete/${blogId}/${commentId}`,
        {method: "DELETE"},
      )
      return apiData
    },
    onSuccess: (data) => {
      dispatch(setMessage(data.message))
      queryClient.invalidateQueries(["admin-comments"])
    },
    onError: (e) => {
      dispatch(setMessage(e?.message || "Failed to delete comment"))
    },
  })

  return (
    <div className={style["comments"]}>
      <div className={style["comments-wrapper"]}>
        <h2>Comments</h2>
        <div className={style["comments-list"]}>
          {Array.isArray(data?.blogs) && data.blogs.length > 0 ? (
            data.blogs.map((group) => (
              <div key={group._id} className={style["blog-group"]}>
                <div className={style["blog-header"]}>
                  <p>
                    <strong>Blog :</strong> {group.title}
                  </p>
                  <button className={style["approve-all-btn"]}>
                    Approve All
                  </button>
                </div>
                <div className={style["comment-rows"]}>
                  {group.comments.map((c) => (
                    <div key={c._id} className={style["comment-row"]}>
                      <div className={style["comment-info"]}>
                        <p>
                          <strong>Name :</strong> {c.name}
                        </p>
                        <p>
                          <strong>Comment :</strong> {c.comment}
                        </p>
                      </div>
                      <div
                        className={style["comment-actions"]}
                        onClick={() =>
                          deleteCommentMutation.mutate({
                            blogId: group._id,
                            commentId: c._id,
                          })
                        }
                      >
                        <AiOutlineDelete className={style["delete-icon"]} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p>No comments yet</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Comments
