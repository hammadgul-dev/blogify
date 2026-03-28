import style from "../Pages Style/Dashboard.module.css"
import { MdOutlinePublish } from "react-icons/md";
import { MdUnpublished } from "react-icons/md";

function Dashboard() {
    return (
        <div className={style["dashboard"]}>
            <div className={style["stats"]}>
                <div className={style["stat-card"]}>
                    <MdOutlinePublish />
                    <div className={style["stat-info"]}>
                        <h3>Publish Blogs</h3>
                        <p>10</p>
                    </div>
                </div>
                <div className={style["stat-card"]}>
                    <MdUnpublished />
                    <div className={style["stat-info"]}>
                        <h3>UnPublish Blogs</h3>
                        <p>10</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard