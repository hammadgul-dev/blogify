import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearMessage } from "../Redux/Slice/NotificationSlice";
import style from "../Components Style/Notification.module.css";

function Notification() {
  const dispatch = useDispatch();
  let message = useSelector((state) => state.notification.message);

  useEffect(() => {
    if (!message) return;
    let timer = setTimeout(() => dispatch(clearMessage()), 2500);
    return () => clearTimeout(timer);
  }, [message]);

  if (!message) return null;

  return <div className={`${style.notification}`}>{message}</div>;
}

export default Notification;
