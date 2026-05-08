import {useState} from "react"
import style from "../Components Style/PostComment.module.css"
import {useMutation} from "@tanstack/react-query"
import {setMessage} from "../Redux/Slice/NotificationSlice.js"
import {useDispatch} from "react-redux"

function PostComment({blogId, comments = []}) {
  let dispatch = useDispatch()
  let approvedComments = comments.filter((c) => c.isApproved)

  let [comment, setComment] = useState({
    name: null,
    comment: null,
  })

  let addCommentMutation = useMutation({
    mutationFn: async () => {
      let res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/comment/${blogId}`,
        {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(comment),
        },
      )
      return res.json()
    },
    onSuccess: (data) => {
      dispatch(setMessage(data.message))
      setComment({name: null, comment: null})
    },
    onError: (e) => {
      dispatch(setMessage(e?.message || "Failed to add comment"))
    },
  })

  function handleComment() {
    if (!comment.name || comment.name.trim() === "")
      return dispatch(setMessage("Name is required"))
    if (!comment.comment || comment.comment.trim() === "")
      return dispatch(setMessage("Comment is required"))
    addCommentMutation.mutate()
  }

  return (
    <div className={style["comment-section"]}>
      <h3>Comments ({approvedComments.length})</h3>

      <div className={style["comments-list"]}>
        {Array.isArray(approvedComments) && approvedComments.length > 0 ? (
          approvedComments.map((c) => (
            <div key={c._id} className={style["comment-item"]}>
              <p className={style["comment-name"]}>{c.name}</p>
              <p className={style["comment-text"]}>{c.comment}</p>
            </div>
          ))
        ) : (
          <p className={style["no-comments"]}>No comments yet</p>
        )}
      </div>

      <div className={style["comment-form"]}>
        <h4>Add your comment</h4>
        <input
          type="text"
          placeholder="Name"
          value={comment.name || ""}
          onChange={(e) => setComment({...comment, name: e.target.value})}
        />
        <textarea
          rows={5}
          placeholder="Comment"
          value={comment.comment || ""}
          onChange={(e) => setComment({...comment, comment: e.target.value})}
        />
        <button onClick={() => handleComment()}>Submit</button>
      </div>
    </div>
  )
}

export default PostComment
