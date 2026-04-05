import style from "../Components Style/Sidebar.module.css"
import { MdDashboard } from "react-icons/md";
import { MdAddBox } from "react-icons/md";
import { MdEditDocument } from "react-icons/md";
import { FaComments } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { TbEdit } from "react-icons/tb";
import { FaRegCommentDots } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";

function Sidebar() {
    let navigate = useNavigate()

    return (
        <div className={style["sidebar"]}>
            <div className={style["sidebar-top"]}>
                <div className={style["sidebar-item"]} onClick={() => navigate("dashboard")}>
                    <RxDashboard />
                    <span>Dashboard</span>
                </div>
                <div className={style["sidebar-item"]} onClick={() => navigate("add-blog")}>
                    <MdOutlineLibraryAdd />
                    <span>Add Blogs</span>
                </div>
                <div className={style["sidebar-item"]} onClick={() => navigate("edit-blog")}>
                    <TbEdit />
                    <span>Edit Blogs</span>
                </div>
                <div className={style["sidebar-item"]} onClick={() => navigate("comments")}>
                    <FaRegCommentDots />
                    <span>Comments</span>
                </div>
            </div>
            <div className={style["sidebar-bottom"]}>
                <div className={style["sidebar-item"]} onClick={() => navigate("profile")}>
                    <MdManageAccounts />
                    <span>Profile Setting</span>
                </div>
                <div className={style["sidebar-item"]} onClick={() => navigate("trash")}>
                    <AiOutlineDelete />
                    <span>Trash Bin</span>
                </div>
            </div>
        </div>
    )
}

export default Sidebar