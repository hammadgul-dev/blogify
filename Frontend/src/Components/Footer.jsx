import style from "../Components Style/Footer.module.css"
import {FaBlog} from "react-icons/fa"
import {FaInstagram, FaXTwitter, FaFacebook, FaYoutube} from "react-icons/fa6"
import {useNavigate} from "react-router-dom"

function Footer() {
  let navigate = useNavigate()

  return (
    <div className={style["footer-section"]}>
      <div className={style["footer-top"]}>
        <div className={style["footer-brand"]}>
          <div
            className={style["footer-logo"]}
            onClick={() => navigate("/")}
            style={{cursor: "pointer"}}
          >
            <span>
              <FaBlog />
            </span>
            <h2>Blogify</h2>
          </div>
          <p>
            Write freely. Share boldly. Inspire endlessly. Blogify is your space
            to tell the stories that matter.
          </p>
        </div>
        <div className={style["footer-links"]}>
          <h3>Quick Links</h3>
          <ul>
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/")}>All Blogs</li>
            <li onClick={() => navigate("/")}>Contact Us</li>
            <li onClick={() => navigate("/")}>FAQs</li>
          </ul>
        </div>
        <div className={style["footer-social"]}>
          <h3>Follow Us</h3>
          <ul>
            <li onClick={() => window.open("https://instagram.com", "_blank")}>
              <FaInstagram />
              <span>Instagram</span>
            </li>
            <li onClick={() => window.open("https://twitter.com", "_blank")}>
              <FaXTwitter />
              <span>Twitter</span>
            </li>
            <li onClick={() => window.open("https://facebook.com", "_blank")}>
              <FaFacebook />
              <span>Facebook</span>
            </li>
            <li onClick={() => window.open("https://youtube.com", "_blank")}>
              <FaYoutube />
              <span>YouTube</span>
            </li>
          </ul>
        </div>
      </div>
      <div className={style["footer-bottom"]}>
        <p>Copyright 2026 &copy; Blogify — All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
