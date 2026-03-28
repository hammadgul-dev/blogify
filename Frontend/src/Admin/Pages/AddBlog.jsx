import style from "../Pages Style/AddBlog.module.css"
import { LuCloudUpload } from "react-icons/lu";
import { BsStars } from "react-icons/bs";

function AddBlog() {
    return (
        <div className={style["addblog"]}>
            <div className={style["addblog-card"]}>

                <div className={style["form-group"]}>
                    <div className={style["label-row"]}>
                        <label>Upload Thumbnail</label>
                        <button className={style["ai-img-btn"]}><BsStars /> Generate with AI</button>
                    </div>
                    <div className={style["upload-box"]}>
                        <LuCloudUpload />
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
                    <div className={style["textarea-wrapper"]}>
                        <textarea rows={8} placeholder="Write your blog here..." />
                        <button className={style["ai-btn"]}><BsStars /> Generate with AI</button>
                    </div>
                </div>

                <div className={style["wrapper"]}>
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
                        <label htmlFor="publish">Publish Now</label>
                        <input type="checkbox" id="publish" />
                    </div>
                </div>

                <div className={style["submit-row"]}>
                    <button className={style["submit-btn"]}>Add Blog</button>
                </div>

            </div>
        </div>
    )
}

export default AddBlog