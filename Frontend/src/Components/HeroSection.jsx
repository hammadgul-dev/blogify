import style from "../Components Style/HeroSection.module.css"
import {PiShootingStarDuotone} from "react-icons/pi"
import {setSearch} from "../Redux/Slice/SearchSlice"
import {useDispatch} from "react-redux"
import {useState} from "react"

function HeroSection() {
  let [input, setInput] = useState("")
  let dispatch = useDispatch()

  return (
    <div className={style["hero-section"]}>
      <div className={style["hero-msg"]}>
        <p>
          New: AI-Powered Writing Assistant
          <span>
            <PiShootingStarDuotone />
          </span>{" "}
        </p>
      </div>
      <div className={style["hero-heading"]}>
        <h1>
          Your Story Deserves <br /> to Be Heard.
        </h1>
      </div>
      <div className={style["hero-subtitle"]}>
        Blogify gives you the space to write freely, share boldly, and connect
        with readers who care.
      </div>
      <div className={style["search-box"]}>
        <input
          type="text"
          placeholder="Search Blog Posts"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={() => dispatch(setSearch(input.trim().toLowerCase()))}>
          Search
        </button>
      </div>
    </div>
  )
}

export default HeroSection
