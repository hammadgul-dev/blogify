import { useState } from "react"
import style from "../Pages Style/Auth.module.css"
import { FaBlog } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

function Auth() {
    const [isLogin, setIsLogin] = useState(false)

    return (
        <div className={style["auth-page"]}>
            <div className={style["auth-card"]}>
                <div className={style["auth-logo"]}>
                    <FaBlog />
                    <h2>Blogify</h2>
                </div>
                <h1>{isLogin ? "Welcome Back" : "Create Account"}</h1>
                <div className={style["auth-tabs"]}>
                    <button
                        className={!isLogin ? style["active-tab"] : ""}
                        onClick={() => setIsLogin(false)}
                    >
                        Sign Up
                    </button>
                    <button
                        className={isLogin ? style["active-tab"] : ""}
                        onClick={() => setIsLogin(true)}
                    >
                        Login
                    </button>
                </div>

                <div className={style["auth-form"]}>
                    {!isLogin && (
                        <div className={style["form-group"]}>
                            <label>Full Name</label>
                            <input type="text" placeholder="John Doe" />
                        </div>
                    )}
                    <div className={style["form-group"]}>
                        <label>Email</label>
                        <input type="email" placeholder="you@example.com" />
                    </div>
                    <div className={style["form-group"]}>
                        <label>Password</label>
                        <input type="password" placeholder="••••••••" />
                    </div>
                    <button className={style["submit-btn"]}>
                        {isLogin ? "Login" : "Sign Up"}
                    </button>
                    <div className={style["divider"]}>
                        <span>or</span>
                    </div>
                    <button className={style["google-btn"]}>
                        <FcGoogle />
                        {isLogin ? "Login with Google" : "Sign Up with Google"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Auth