import {createBrowserRouter} from "react-router-dom"
import Home from "./Pages/Home"
import Auth from "./Pages/Auth"
import AdminLayout from "./Admin/Components/AdminLayout"
import Dashboard from "./Admin/Pages/Dashboard"
import AddBlog from "./Admin/Pages/AddBlog"
import Comments from "./Admin/Pages/Comments"
import EditBlogs from "./Admin/Pages/EditBlogs"
import TrashBin from "./Admin/Pages/TrashBin"
import BlogDetail from "./Pages/BlogDetail"
import GoogleSuccess from "./Components/GoogleSuccess"
import NotFound from "./Pages/NotFound"

let routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/blog/:id",
    element: <BlogDetail />,
  },
  {
    path: "/auth/google/success",
    element: <GoogleSuccess />,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {index: true, element: <Dashboard />},
      {path: "dashboard", element: <Dashboard />},
      {path: "add-blog", element: <AddBlog />},
      {path: "comments", element: <Comments />},
      {path: "edit-blog", element: <EditBlogs />},
      {path: "edit-blog/:id", element: <AddBlog isEdit={true} />},
      {path: "trash", element: <TrashBin />},
    ],
  },
  {path: "*", element: <NotFound />},
])

export default routes
