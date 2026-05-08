import {useEffect} from "react"
import {useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux"
import {setMessage} from "../Redux/Slice/NotificationSlice"

function GoogleSuccess() {
  let navigate = useNavigate()
  let dispatch = useDispatch()

  useEffect(() => {
    let params = new URLSearchParams(window.location.search)
    let token = params.get("token")
    let userName = params.get("userName")
    let message = params.get("message")

    if (token) {
      localStorage.setItem("token", token)
      localStorage.setItem("userName", userName)
      dispatch(setMessage(message))
      navigate("/admin/dashboard", {replace: true})
    } else {
      navigate("/auth", {replace: true})
    }
  }, [])

  return <p>Redirecting...</p>
}

export default GoogleSuccess
