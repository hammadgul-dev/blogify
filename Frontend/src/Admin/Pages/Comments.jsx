import style from "../Pages Style/Comments.module.css"
import { AiOutlineDelete } from "react-icons/ai";

const tempComments = [
    {
        blog: "The Rise of Artificial Intelligence",
        comments: [
            { id: 1, name: "John Doe", comment: "This was an amazing read! Really helped me understand AI better.", status: "Approved" },
            { id: 2, name: "Sara Khan", comment: "Great article, very informative and well written.", status: "Not Approved" },
            { id: 3, name: "Ali Raza", comment: "I totally agree with this perspective.", status: "Approved" },
        ]
    },
    {
        blog: "Does AI Replace Developer",
        comments: [
            { id: 4, name: "John Doe", comment: "This was an amazing read! Really helped me understand AI better.", status: "Not Approved" },
            { id: 5, name: "Sara Khan", comment: "Great article, very informative and well written.", status: "Approved" },
            { id: 6, name: "Ali Raza", comment: "I totally agree with this perspective.", status: "Not Approved" },
        ]
    },
]

function Comments() {
    return (
        <div className={style["comments"]}>
            <div className={style["comments-wrapper"]}>
                <h2>Comments</h2>
                <div className={style["comments-list"]}>
                    {tempComments.map((group, i) => (
                        <div key={i} className={style["blog-group"]}>
                            <div className={style["blog-header"]}>
                                <p><strong>Blog :</strong> {group.blog}</p>
                                <button className={style["approve-all-btn"]}>Approve All</button>
                            </div>
                            <div className={style["comment-rows"]}>
                                {group.comments.map((c) => (
                                    <div key={c.id} className={style["comment-row"]}>
                                        <div className={style["comment-info"]}>
                                            <p><strong>Name :</strong> {c.name}</p>
                                            <p><strong>Comment :</strong> {c.comment}</p>
                                        </div>
                                        <div className={style["comment-actions"]}>
                                            <span className={c.status === "Approved" ? style["approved"] : style["not-approved"]}>
                                                {c.status}
                                            </span>
                                            <AiOutlineDelete className={style["delete-icon"]} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Comments