import {useState} from "react"
import style from "../Pages Style/Auth.module.css"
import {FaBlog} from "react-icons/fa"
import {FcGoogle} from "react-icons/fc"
import {useDispatch} from "react-redux"
import {setMessage} from "../Redux/Slice/NotificationSlice"
import {useMutation} from "@tanstack/react-query"
import {useNavigate} from "react-router-dom"

function Auth() {
  let dispatch = useDispatch()
  let navigate = useNavigate()
  const [isLogin, setIsLogin] = useState(false)
  let [signInfo, setSignupInfo] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
  })
  let [loginInfo, setLoginInfo] = useState({
    userEmail: "",
    userPassword: "",
  })

  function handleAuthForm() {
    if (!isLogin) {
      if (!signInfo.userName && !signInfo.userEmail && !signInfo.userPassword)
        return dispatch(setMessage("All Fields Are Required"))
      if (!signInfo.userName) return dispatch(setMessage("Name Is Required"))
      if (!signInfo.userEmail) return dispatch(setMessage("Email Is Required"))
      if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(signInfo.userEmail))
        return dispatch(setMessage("Invalid Email"))
      if (!signInfo.userPassword)
        return dispatch(setMessage("Password Is Required"))
      if (signInfo.userPassword.length < 8)
        return dispatch(setMessage("Password Too Short"))
      signUpMutation.mutate(signInfo)
    } else {
      if (!loginInfo.userEmail && !loginInfo.userPassword)
        return dispatch(setMessage("All Fields Are Required"))
      if (!loginInfo.userEmail) return dispatch(setMessage("Email Is Required"))
      if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(loginInfo.userEmail))
        return dispatch(setMessage("Invalid Email"))
      if (!loginInfo.userPassword)
        return dispatch(setMessage("Password Is Required"))
      if (loginInfo.userPassword.length < 8)
        return dispatch(setMessage("Password Too Short"))
      loginMutation.mutate()
    }
  }

  let signUpMutation = useMutation({
    mutationFn: async () => {
      let apiResp = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/auth/signup`,
        {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(signInfo),
        },
      )
      let apiData = await apiResp.json()
      if (!apiResp.ok) throw new Error(apiData.message)
      return apiData
    },
    onSuccess: (apiData) => {
      localStorage.setItem("token", apiData.token)
      localStorage.setItem("userName", apiData.newUser)
      dispatch(setMessage(apiData.message))
      setSignupInfo({userName: "", userEmail: "", userPassword: ""})
      setTimeout(() => navigate("/admin/dashboard", {replace: true}), 1200)
    },
    onError: (e) => {
      dispatch(setMessage(e.message || "signUp Failed"))
    },
  })

  let loginMutation = useMutation({
    mutationFn: async () => {
      let apiResp = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/auth/login`,
        {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(loginInfo),
        },
      )
      let apiData = await apiResp.json()
      if (!apiResp.ok) throw new Error(apiData.message)
      return apiData
    },
    onSuccess: (apiData) => {
      localStorage.setItem("token", apiData.token)
      localStorage.setItem("userName", apiData.userName)
      dispatch(setMessage(apiData.message))
      setLoginInfo({userEmail: "", userPassword: ""})
      setTimeout(() => navigate("/admin/dashboard", {replace: true}), 1200)
    },
    onError: (e) => {
      dispatch(setMessage(e.message || "Login Failed"))
    },
  })

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
              <input
                type="text"
                placeholder="Your Name"
                value={signInfo.userName}
                spellCheck="false"
                onChange={(e) =>
                  !isLogin &&
                  setSignupInfo({
                    ...signInfo,
                    userName: e.target.value,
                  })
                }
              />
            </div>
          )}
          <div className={style["form-group"]}>
            <label>Email</label>
            <input
              type="email"
              placeholder="Your Email"
              value={!isLogin ? signInfo.userEmail : loginInfo.userEmail}
              spellCheck="false"
              onChange={(e) =>
                !isLogin
                  ? setSignupInfo({
                      ...signInfo,
                      userEmail: e.target.value.trim(),
                    })
                  : setLoginInfo({
                      ...loginInfo,
                      userEmail: e.target.value.trim(),
                    })
              }
            />
          </div>
          <div className={style["form-group"]}>
            <label>Password</label>
            <input
              type="password"
              placeholder="Your Password"
              value={!isLogin ? signInfo.userPassword : loginInfo.userPassword}
              spellCheck="false"
              onChange={(e) =>
                !isLogin
                  ? setSignupInfo({
                      ...signInfo,
                      userPassword: e.target.value.trim(),
                    })
                  : setLoginInfo({
                      ...loginInfo,
                      userPassword: e.target.value.trim(),
                    })
              }
            />
          </div>
          <button
            className={style["google-btn"]}
            onClick={() =>
              (window.location.href = `${import.meta.env.VITE_BACKEND_URL}/auth/google`)
            }
          >
            <FcGoogle />
            {isLogin ? "Login with Google" : "Sign Up with Google"}
          </button>
          <div className={style["divider"]}>
            <span>or</span>
          </div>
          <button
            className={style["submit-btn"]}
            onClick={() => handleAuthForm()}
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Auth
