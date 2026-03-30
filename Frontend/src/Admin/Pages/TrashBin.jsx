import style from "../Pages Style/TrashBin.module.css"

const tempTrashed = [
    { id: 1, title: "The Rise of Artificial Intelligence in Modern Technology" },
    { id: 2, title: "Importance of Tourism in Today's World" },
    { id: 3, title: "The New Way of Study" },
    { id: 4, title: "Taxes on Luxury Houses" },
    { id: 5, title: "Maximizing Returns in Startup" },
]

function TrashBin() {
    return (
        <div className={style["trashbin"]}>
            <div className={style["trashbin-wrapper"]}>
                <h2>Trash Bin</h2>
                <div className={style["blog-list"]}>
                    {tempTrashed.map((blog) => (
                        <div key={blog.id} className={style["blog-row"]}>
                            <p><strong>Blog :</strong> {blog.title}</p>
                            <button className={style["restore-btn"]}>Restore</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TrashBin