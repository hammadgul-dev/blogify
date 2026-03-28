import style from "../Components Style/Footer.module.css"
import { FaBlog } from "react-icons/fa";
import { FaInstagram, FaXTwitter, FaFacebook, FaYoutube } from "react-icons/fa6";

function Footer() {
    return (
        <div className={style["footer-section"]}>
            <div className={style["footer-top"]}>
                <div className={style["footer-brand"]}>
                    <div className={style["footer-logo"]}>
                        <span><FaBlog /></span>
                        <h2>Blogify</h2>
                    </div>
                    <p>Write freely. Share boldly. Inspire endlessly. Blogify is your space to tell the stories that matter.</p>
                </div>
                <div className={style["footer-links"]}>
                    <h3>Quick Links</h3>
                    <ul>
                        <li>Home</li>
                        <li>All Blogs</li>
                        <li>Contact Us</li>
                        <li>FAQs</li>
                    </ul>
                </div>
                <div className={style["footer-social"]}>
                    <h3>Follow Us</h3>
                    <ul>
                        <li><FaInstagram /><span>Instagram</span></li>
                        <li><FaXTwitter /><span>Twitter</span></li>
                        <li><FaFacebook /><span>Facebook</span></li>
                        <li><FaYoutube /><span>YouTube</span></li>
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