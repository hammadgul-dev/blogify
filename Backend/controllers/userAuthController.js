import authModel from "../models/userAuthModel.js";

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
    if (userPassword < 8)
      return resp.status(400).json({ message: "Password Is Too Short" });
  } catch (e) {
    resp.status(500).json({ message: "Error Occur During Signup" });
  }
}
