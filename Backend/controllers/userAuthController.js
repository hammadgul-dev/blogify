import authModel from "../models/userAuthModel.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

async function handleSignupForm(req, resp) {
  try {
    let {userName, userEmail, userPassword} = req.body

    if (!userName) return resp.status(400).json({message: "Name Is Required"})

    if (!userEmail) return resp.status(400).json({message: "Email Is Required"})

    if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(userEmail))
      return resp.status(400).json({message: "Invailed Email"})

    if (!userPassword)
      return resp.status(400).json({message: "Password Is Required"})

    if (userPassword.length < 8)
      return resp.status(400).json({message: "Password Is Too Short"})

    let isEmailExist = await authModel.findOne({userEmail})

    if (isEmailExist)
      return resp.status(400).json({message: "Email Already Registered!"})

    let hashPassword = await bcrypt.hash(userPassword, 10)
    let newUser = await authModel.create({
      userName,
      userEmail,
      userPassword: hashPassword,
    })

    let token = jwt.sign(
      {userId: newUser._id, userEmail},
      process.env.JWT_SECRET,
      {expiresIn: "7d"},
    )

    resp.status(201).json({
      message: "Signup Successfully",
      token: token,
      newUser: userName,
    })
  } catch (e) {
    resp.status(500).json({message: "Error Occur During Signup"})
  }
}

async function handleLoginForm(req, resp) {
  try {
    let {userEmail, userPassword} = req.body

    if (!userEmail || !userPassword)
      return resp.status(400).json({message: "All Fields Are Required"})

    if (!userEmail) return resp.status(400).json({message: "Email Is Required"})

    if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(userEmail))
      return resp.status(400).json({message: "Invalid Email"})

    if (!userPassword)
      return resp.status(400).json({message: "Password Is Required"})

    if (userPassword.length < 8)
      return resp.status(400).json({message: "Password Too Short"})

    let findingUser = await authModel.findOne({userEmail})

    if (!findingUser)
      return resp.status(404).json({message: "Account Not Found!"})

    let checkUserPass = await bcrypt.compare(
      userPassword,
      findingUser.userPassword,
    )

    if (!checkUserPass)
      return resp.status(400).json({message: "Incorrect Password"})

    let token = jwt.sign(
      {userId: findingUser._id, userEmail},
      process.env.JWT_SECRET,
      {expiresIn: "7d"},
    )

    resp.status(200).json({
      message: "Login Successfully",
      token: token,
      userName: findingUser.userName,
    })
  } catch (e) {
    resp.status(500).json({message: "Error Occur During Login"})
  }
}

async function verifyUser(req, resp) {
  try {
    resp.status(200).json({message: "Verified", user: req.user})
  } catch (e) {
    return resp.status(500).json({message: "Failed To Verify"})
  }
}

export {handleSignupForm, handleLoginForm, verifyUser}
