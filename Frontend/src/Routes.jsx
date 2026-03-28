import { createBrowserRouter } from "react-router-dom"
import Home from "./Pages/Home"
import Auth from "./Pages/Auth"
import AdminLayout from "./Admin/Components/AdminLayout"
import Dashboard from "./Admin/Pages/Dashboard"

let routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/auth",
        element: <Auth />
    },
    {
        path: "/admin",
        element: <AdminLayout />,
        children: [
            { index: true, element: <Dashboard /> },
            { path: "dashboard", element: <Dashboard /> },
        ]
    },
])

export default routes