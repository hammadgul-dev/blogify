import style from "../Components Style/HeroSection.module.css"
import { PiShootingStarDuotone } from "react-icons/pi";

function HeroSection() {
    return (
        <div className={style["hero-section"]}>
            <div className={style["hero-msg"]}>
                <p>New: AI-Powered Writing Assistant<span><PiShootingStarDuotone/></span> </p>
            </div>
            <div className={style["hero-heading"]}>
                <h1>Share Your Story, <br /> Your Way</h1>
            </div>
            <div className={style["hero-subtitle"]}>
                One idea can change everything. Your words have power so start writing, start sharing, and let your story move the world
            </div>
            <div className={style["search-box"]}>
                <input type="text" placeholder="Search Blog Posts" />
                <button>Search</button>
            </div>
        </div>
    )
}

export default HeroSection