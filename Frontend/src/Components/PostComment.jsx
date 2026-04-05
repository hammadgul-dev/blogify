import style from "../Components Style/PostComment.module.css"

function PostComment() {
    return (
        <div className={style["comment-section"]}>
            <h3>Comments (0)</h3>
            <div className={style["comment-form"]}>
                <h4>Add your comment</h4>
                <input type="text" placeholder="Name" />
                <textarea rows={5} placeholder="Comment" />
                <button>Submit</button>
            </div>
        </div>
    )
}

export default PostComment