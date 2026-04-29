import style from "../Components Style/AdminLayout.module.css"
import Sidebar from "./Sidebar"
import Navbar from "../../Components/Navbar"
import {Outlet, useNavigate} from "react-router-dom"
import {useEffect} from "react"

function AdminLayout() {
  let navigate = useNavigate()
  let token = localStorage.getItem("token")
  useEffect(() => {
    if (!token) navigate("/auth")
  }, [])
  if (!token) return null

  return (
    <div className={style["admin-layout"]}>
      <Navbar />
      <div className={style["admin-body"]}>
        <Sidebar />
        <div className={style["admin-content"]}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AdminLayout
