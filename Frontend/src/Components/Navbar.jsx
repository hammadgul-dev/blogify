import style from "../Components Style/Navbar.module.css"
import { FaBlog } from "react-icons/fa";
import { CiLight } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
// import { MdOutlineDarkMode } from "react-icons/md";

function Navbar() {
    let navigate = useNavigate()

    return (
        <div className={style["nav-section"]}>
            <div className={style["left-section"]}>
                <div className={style.logo}>
                    <span><FaBlog /></span>
                    <h1>Blogify</h1>
                </div>
            </div>
            <div className={style["right-section"]}>
                <span><CiLight /></span>
                <button onClick={()=> navigate("/auth")}>Sign Up &rarr;</button>
            </div>
        </div>
    )
}

export default Navbar