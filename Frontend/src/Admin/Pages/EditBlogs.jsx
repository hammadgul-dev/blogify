import style from "../Pages Style/EditBlogs.module.css"
import {useNavigate} from "react-router-dom"
import {useQuery} from "@tanstack/react-query"
import apiFetch from "../../helper/apiFetch"

function EditBlogs() {
  const navigate = useNavigate()

  let adminBlogs = useQuery({
    queryKey: ["admin-blog"],
    queryFn: async () => {
      let apiData = await apiFetch(`${import.meta.env.VITE_BACKEND_URL}/blog`)
      return apiData
    },
    refetchOnWindowFocus: false,
  })

  return (
    <div className={style["editblogs"]}>
      <div className={style["editblogs-wrapper"]}>
        <h2>Edit Blogs</h2>
        <div className={style["blog-list"]}>
          {Array.isArray(adminBlogs.data?.adminBlog) &&
          adminBlogs.data.adminBlog.length > 0 ? (
            adminBlogs.data.adminBlog.map((blog) => (
              <div key={blog._id} className={style["blog-row"]}>
                <p>
                  <strong>Blog :</strong> {blog.title}
                </p>
                <button
                  className={style["edit-btn"]}
                  onClick={() => navigate(`/admin/edit-blog/${blog._id}`)}
                >
                  Edit
                </button>
              </div>
            ))
          ) : (
            <p className={style["no-blogs"]}>No Blogs Found</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default EditBlogs
