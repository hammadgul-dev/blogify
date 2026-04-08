import authModel from "../models/userAuthModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

async function handleSignupForm(req, resp) {
  try {
    let { userName, userEmail, userPassword } = req.body;

    if (!userName)
      return resp.status(400).json({ message: "Name Is Required" });

    if (!userEmail)
      return resp.status(400).json({ message: "Email Is Required" });

    if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(userEmail))
      return resp.status(400).json({ message: "Invailed Email" });

    if (!userPassword)
      return resp.status(400).json({ message: "Password Is Required" });

    if (userPassword.length < 8)
      return resp.status(400).json({ message: "Password Is Too Short" });

    let isEmailExist = await authModel.findOne({ userEmail });

    if (isEmailExist)
      return resp.status(400).json({ message: "Email Already Registered!" });

    let hashPassword = await bcrypt.hash(userPassword , 10);
    let newUser = await authModel.create({
      userName,
      userEmail,
      userPassword: hashPassword,
    });

    let token = jwt.sign(
      { userId: newUser._id, userEmail },
      process.env.JWT_SECRET,
      { expiresIn: "7d" },
    );

    resp.status(201).json({
      message: "Signup Successfully",
      token: token,
      newUser: userName,
      userId: newUser._id,
    });

  } catch (e) {
    resp.status(500).json({ message: "Error Occur During Signup" });
  }
}

export { handleSignupForm }
