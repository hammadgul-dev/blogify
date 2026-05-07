import {useState} from "react"
import style from "../Components Style/PostComment.module.css"
import {useQuery, useMutation} from "@tanstack/react-query"
import {setMessage} from "../Redux/Slice/NotificationSlice.js"
import {useDispatch} from "react-redux"

function PostComment({blogId}) {
  let dispatch = useDispatch()
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
    },
    onError: () => {
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
      <h3>Comments (0)</h3>
      <div className={style["comment-form"]}>
        <h4>Add your comment</h4>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setComment({...comment, name: e.target.value})}
        />
        <textarea
          rows={5}
          placeholder="Comment"
          onChange={(e) => setComment({...comment, comment: e.target.value})}
        />
        <button onClick={() => handleComment()}>Submit</button>
      </div>
    </div>
  )
}

export default PostComment
