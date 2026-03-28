import style from "../Pages Style/Dashboard.module.css"
import { MdOutlinePublish } from "react-icons/md";
import { MdUnpublished } from "react-icons/md";

const tempBlogs = [
    { id: 1, title: "The Rise of Artificial Intelligence", date: "Wed Mar 26 2026", status: "Published" },
    { id: 2, title: "Importance of Tourism", date: "Wed Mar 26 2026", status: "Published" },
    { id: 3, title: "The New Way of Study", date: "Wed Mar 26 2026", status: "Unpublished" },
    { id: 4, title: "Taxes on Luxury Houses", date: "Wed Mar 26 2026", status: "Published" },
    { id: 5, title: "Maximizing Returns in Startup", date: "Wed Mar 26 2026", status: "Unpublished" },
]

function Dashboard() {
    return (
        <div className={style["dashboard"]}>
            <div className={style["stats"]}>
                <div className={style["stat-card"]}>
                    <span><MdOutlinePublish /></span>
                    <div className={style["stat-info"]}>
                        <h3>Publish Blogs</h3>
                        <p>10</p>
                    </div>
                </div>
                <div className={style["stat-card"]}>
                    <span><MdUnpublished /></span>
                    <div className={style["stat-info"]}>
                        <h3>UnPublish Blogs</h3>
                        <p>10</p>
                    </div>
                </div>
            </div>

            <div className={style["table-section"]}>
                <h2>Latest Blogs</h2>
                <div className={style["table-wrapper"]}>
                    <table className={style["table"]}>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Blog Title</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tempBlogs.map((blog) => (
                                <tr key={blog.id}>
                                    <td>{blog.id}</td>
                                    <td>{blog.title}</td>
                                    <td>{blog.date}</td>
                                    <td>
                                        <span className={blog.status === "Published" ? style["published"] : style["unpublished"]}>
                                            {blog.status}
                                        </span>
                                    </td>
                                    <td>
                                        <div className={style["actions"]}>
                                            <button>{blog.status === "Published" ? "Unpublish" : "Publish"}</button>
                                            <button className={style["delete-btn"]}>✕</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Dashboard