import style from "../Components Style/AdminLayout.module.css"
import Sidebar from "./Sidebar"
import Navbar from "../../Components/Navbar"
import { Outlet } from "react-router-dom"

function AdminLayout() {
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