import { createRoot } from 'react-dom/client'
import "./Pages Style/Home.css"
import Home from './Pages/Home'
import { RouterProvider } from 'react-router-dom'
import routes from './Routes'

createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes}>
    <Home />
  </RouterProvider>
)
