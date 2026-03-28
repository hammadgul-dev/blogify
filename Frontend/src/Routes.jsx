import { createBrowserRouter } from "react-router-dom"
import Home from "./Pages/Home"
import Auth from "./Pages/Auth"

let routes = createBrowserRouter([
    { 
        path : "/",
        element : <Home />
     },
     {
        path : "/auth",
        element : <Auth />
     }
])

export default routes