import style from "../Components Style/Navbar.module.css"
import {FaBlog} from "react-icons/fa"
import {CiLight} from "react-icons/ci"
import {useNavigate} from "react-router-dom"
import {useQuery} from "@tanstack/react-query"
import apiFetch from "../helper/apiFetch.js"

function Navbar() {
  let navigate = useNavigate()

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
        <span>
          <CiLight />
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
