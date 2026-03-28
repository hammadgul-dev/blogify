import { createBrowserRouter } from "react-router-dom"
import Home from "./Pages/Home"

let routes = createBrowserRouter([
    { 
        path : "/",
        element : <Home />
     },
])

export default routes