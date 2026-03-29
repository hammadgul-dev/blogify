import style from "../Pages Style/EditBlogs.module.css"
import { useNavigate } from "react-router-dom"

const tempBlogs = [
    { id: 1, title: "The Rise of Artificial Intelligence in Modern Technology" },
    { id: 2, title: "Importance of Tourism in Today's World" },
    { id: 3, title: "The New Way of Study" },
    { id: 4, title: "Taxes on Luxury Houses" },
    { id: 5, title: "Maximizing Returns in Startup" },
    { id: 6, title: "Does AI Replace Developers" },
]

function EditBlogs() {
    const navigate = useNavigate()

    return (
        <div className={style["editblogs"]}>
            <div className={style["editblogs-wrapper"]}>
                <h2>Edit Blogs</h2>
                <div className={style["blog-list"]}>
                    {tempBlogs.map((blog) => (
                        <div key={blog.id} className={style["blog-row"]}>
                            <p><strong>Blog :</strong> {blog.title}</p>
                            <button
                                className={style["edit-btn"]}
                                onClick={() => navigate(`/admin/edit-blog/${blog.id}`)}
                            >
                                Edit
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default EditBlogs