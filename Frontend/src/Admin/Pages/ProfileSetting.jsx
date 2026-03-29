import style from "../Pages Style/ProfileSetting.module.css"
import { GrEdit } from "react-icons/gr";

function ProfileSetting() {
    return (
        <div className={style["profile"]}>
            <div className={style["profile-card"]}>

                <div className={style["avatar-wrapper"]}>
                    <div className={style["avatar"]}>
                        <img src="" alt="" />
                    </div>
                    <div className={style["edit-icon"]}>
                        <GrEdit />
                    </div>
                </div>

                <div className={style["form"]}>
                    <div className={style["form-group"]}>
                        <label>Name</label>
                        <input type="text" placeholder="Enter your name" />
                    </div>

                    <div className={style["form-group"]}>
                        <label>Bio</label>
                        <textarea rows={6} placeholder="Tell something about yourself" />
                    </div>

                    <div className={style["form-group"]}>
                        <label>Twitter</label>
                        <input type="text" placeholder="Paste your Twitter link here" />
                    </div>

                    <div className={style["form-group"]}>
                        <label>LinkedIn</label>
                        <input type="text" placeholder="Paste your LinkedIn link here" />
                    </div>

                    <div className={style["form-group"]}>
                        <label>Instagram</label>
                        <input type="text" placeholder="Paste your Instagram link here" />
                    </div>

                    <div className={style["submit-row"]}>
                        <button className={style["submit-btn"]}>Save Changes</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProfileSetting