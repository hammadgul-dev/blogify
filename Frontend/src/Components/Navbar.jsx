import style from "../Components Style/Navbar.module.css"
import {FaBlog} from "react-icons/fa"
import {IoSunnyOutline} from "react-icons/io5"
import {useNavigate} from "react-router-dom"
import {useQuery} from "@tanstack/react-query"
import apiFetch from "../helper/apiFetch.js"
import {useDispatch, useSelector} from "react-redux"
import {toggleTheme} from "../Redux/Slice/ThemeSlice"
import {MdOutlineDarkMode} from "react-icons/md"

function Navbar() {
  let navigate = useNavigate()
  let dispatch = useDispatch()
  let mode = useSelector((state) => state.theme.mode)
  console.log(mode)

  let {data} = useQuery({
    queryKey: ["verify-user"],
    queryFn: async () => {
      let apiData = await apiFetch(
        `${import.meta.env.VITE_BACKEND_URL}/auth/verify`,
      )
      return apiData
    },
    retry: false,
    refetchOnWindowFocus: false,
  })

  return (
    <div className={style["nav-section"]}>
      <div className={style["left-section"]}>
        <div
          className={style.logo}
          onClick={() => navigate("/")}
          style={{cursor: "pointer"}}
        >
          <span>
            <FaBlog />
          </span>
          <h1>Blogify</h1>
        </div>
      </div>
      <div className={style["right-section"]}>
        <span onClick={() => dispatch(toggleTheme())}>
          {mode === "light" ? <MdOutlineDarkMode /> : <IoSunnyOutline />}
        </span>
        {data?.user ? (
          <button onClick={() => navigate("/admin")}>Admin &rarr;</button>
        ) : (
          <button onClick={() => navigate("/auth")}>Sign Up &rarr;</button>
        )}
      </div>
    </div>
  )
}

export default Navbar
