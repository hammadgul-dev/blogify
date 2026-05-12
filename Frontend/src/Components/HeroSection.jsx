import style from "../ComponentsStyle/HeroSection.module.css"
import {PiShootingStarDuotone} from "react-icons/pi"

function HeroSection() {
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
    </div>
  )
}

export default HeroSection
