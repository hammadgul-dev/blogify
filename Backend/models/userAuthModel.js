import mongoose from "mongoose";

let authSchema = new mongoose.Schema(
  {
    userName: { type: String, trim: true, default: "Guest" },
    userEmail: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      match: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
    },
    userPassword: { type: String, required: true, trim: true , minlength : 8 },
  },
  { timestamps: true },
);

let authModel = mongoose.model("user_auth", authSchema);
export default authModel;
