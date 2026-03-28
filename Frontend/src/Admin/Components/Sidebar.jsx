import style from "../Components Style/Sidebar.module.css"
import { MdDashboard } from "react-icons/md";
import { MdAddBox } from "react-icons/md";
import { MdEditDocument } from "react-icons/md";
import { FaComments } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Sidebar() {
    let navigate = useNavigate()

    return (
        <div className={style["sidebar"]}>
            <div className={style["sidebar-top"]}>
                <div className={style["sidebar-item"]}>
                    <MdDashboard />
                    <span>Dashboard</span>
                </div>
                <div className={style["sidebar-item"]}>
                    <MdAddBox />
                    <span onClick={()=> navigate("add-blog")}>Add Blogs</span>
                </div>
                <div className={style["sidebar-item"]}>
                    <MdEditDocument />
                    <span>Edit Blogs</span>
                </div>
                <div className={style["sidebar-item"]}>
                    <FaComments />
                    <span>Comments</span>
                </div>
            </div>
            <div className={style["sidebar-bottom"]}>
                <div className={style["sidebar-item"]}>
                    <MdManageAccounts />
                    <span>Profile Setting</span>
                </div>
                <div className={style["sidebar-item"]}>
                    <MdDelete />
                    <span>Trash Bin</span>
                </div>
            </div>
        </div>
    )
}

export default Sidebar