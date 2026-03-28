import style from "../Pages Style/AddBlog.module.css"
import { MdCloudUpload } from "react-icons/md";

function AddBlog() {
    return (
        <div className={style["addblog"]}>
            <div className={style["addblog-card"]}>

                <div className={style["form-group"]}>
                    <label>Upload Thumbnail</label>
                    <div className={style["upload-box"]}>
                        <MdCloudUpload />
                        <span>Upload</span>
                    </div>
                </div>

                <div className={style["form-group"]}>
                    <label>Blog Title</label>
                    <input type="text" placeholder="Type here" />
                </div>

                <div className={style["form-group"]}>
                    <label>Sub Title</label>
                    <input type="text" placeholder="Type here" />
                </div>

                <div className={style["form-group"]}>
                    <label>Blog Description</label>
                    <textarea rows={8} placeholder="Write your blog here..." />
                </div>

                <div className={style["form-group"]}>
                    <label>Blog Category</label>
                    <select>
                        <option value="">Select category</option>
                        <option value="tech">Tech</option>
                        <option value="business">Business</option>
                        <option value="health">Health</option>
                        <option value="travel">Travel</option>
                        <option value="education">Education</option>
                        <option value="finance">Finance</option>
                        <option value="career">Career</option>
                    </select>
                </div>

                <div className={style["publish-row"]}>
                    <label>Publish Now</label>
                    <input type="checkbox" />
                </div>

                <button className={style["submit-btn"]}>Add Blog</button>

            </div>
        </div>
    )
}

export default AddBlog