import {useMutation, useQuery} from "@tanstack/react-query"
import style from "../Pages Style/Dashboard.module.css"
import {MdOutlinePublish} from "react-icons/md"
import {MdOutlineUnpublished, MdDeleteOutline} from "react-icons/md"
import apiFetch from "../../helper/apiFetch"

function Dashboard() {
  let adminBlogs = useQuery({
    queryKey: ["admin-blog"],
    queryFn: async () => {
      let apiData = await apiFetch(`${import.meta.env.VITE_BACKEND_URL}/blog`)
      return apiData
    },
    refetchOnWindowFocus: false,
  })

  return (
    <div className={style["dashboard"]}>
      <div className={style["stats"]}>
        <div className={style["stat-card"]}>
          <span>
            <MdOutlinePublish />
          </span>
          <div className={style["stat-info"]}>
            <h3>Publish Blogs</h3>
            <p>
              {adminBlogs.data?.adminBlog?.filter((b) => b.isPublish).length ||
                0}
            </p>
          </div>
        </div>
        <div className={style["stat-card"]}>
          <span>
            <MdOutlineUnpublished />
          </span>
          <div className={style["stat-info"]}>
            <h3>UnPublish Blogs</h3>
            <p>
              {adminBlogs.data?.adminBlog?.filter((b) => !b.isPublish).length ||
                0}
            </p>
          </div>
        </div>
      </div>

      <div className={style["table-section"]}>
        <h2>Latest Blogs</h2>
        <div className={style["table-wrapper"]}>
          <table className={style["table"]}>
            <thead>
              <tr>
                <th>Blog Title</th>
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(adminBlogs.data?.adminBlog) &&
              adminBlogs.data?.adminBlog.length > 0 ? (
                adminBlogs.data.adminBlog.map((blog) => (
                  <tr key={blog._id}>
                    <td className={style["title-cell"]}>{blog.title}</td>
                    <td>{new Date(blog.createdAt).toLocaleDateString()}</td>
                    <td>
                      <button
                        className={
                          blog.isPublish
                            ? style["unpublish-btn"]
                            : style["publish-btn"]
                        }
                      >
                        {blog.isPublish ? "Unpublish" : "Publish"}
                      </button>
                    </td>
                    <td>
                      <button className={style["delete-btn"]}>
                        <MdDeleteOutline />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className={style["no-blogs"]}>
                    No Blogs Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
