import style from "../PagesStyle/NotFound.module.css"

function NotFound() {
  return (
    <div className={style["notfound-page"]}>
      <h1>404</h1>
      <p>Page Not Found</p>
    </div>
  )
}

export default NotFound
