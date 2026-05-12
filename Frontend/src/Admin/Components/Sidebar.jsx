import style from "../ComponentsStyle/Sidebar.module.css"
import {MdDashboard} from "react-icons/md"
import {MdAddBox} from "react-icons/md"
import {MdEditDocument} from "react-icons/md"
import {FaComments} from "react-icons/fa"
import {MdManageAccounts} from "react-icons/md"
import {MdDelete} from "react-icons/md"
import {useNavigate} from "react-router-dom"
import {TbLayoutDashboardFilled} from "react-icons/tb"
import {MdOutlineLibraryAdd} from "react-icons/md"
import {TbEdit} from "react-icons/tb"
import {FaRegCommentDots} from "react-icons/fa"
import {AiOutlineDelete} from "react-icons/ai"
import {RxDashboard} from "react-icons/rx"
import {AiOutlineLogout} from "react-icons/ai"
import {useQueryClient} from "@tanstack/react-query"
import {useDispatch} from "react-redux"
import {setMessage} from "../../Redux/Slice/NotificationSlice.js"

function Sidebar() {
  let navigate = useNavigate()
  let queryClient = useQueryClient()
  let dispatch = useDispatch()

  function handleLogout() {
    localStorage.removeItem("token")
    queryClient.clear()
    dispatch(setMessage("Logout Successful"))
    setTimeout(() => {
      navigate("/")
    }, 2600)
  }

  return (
    <div className={style["sidebar"]}>
      <div className={style["sidebar-top"]}>
        <div
          className={style["sidebar-item"]}
          onClick={() => navigate("dashboard")}
        >
          <RxDashboard />
          <span>Dashboard</span>
        </div>
        <div
          className={style["sidebar-item"]}
          onClick={() => navigate("add-blog")}
        >
          <MdOutlineLibraryAdd />
          <span>Add Blogs</span>
        </div>
        <div
          className={style["sidebar-item"]}
          onClick={() => navigate("edit-blog")}
        >
          <TbEdit />
          <span>Edit Blogs</span>
        </div>
      </div>
      <div className={style["sidebar-bottom"]}>
        <div
          className={style["sidebar-item"]}
          onClick={() => navigate("comments")}
        >
          <FaRegCommentDots />
          <span>Comments</span>
        </div>
        <div
          className={style["sidebar-item"]}
          onClick={() => navigate("trash")}
        >
          <AiOutlineDelete />
          <span>Trash Bin</span>
        </div>
        <div
          className={`${style["sidebar-item"]} ${style["logout"]}`}
          onClick={handleLogout}
        >
          <AiOutlineLogout />
          <span>Logout</span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
