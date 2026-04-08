import jwt from "jsonwebtoken";

function authMiddleware(req, resp, next) {
  try {
    let authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith("Bearer"))
      return resp.status(401).json({ message: "SignUp Required" });
    let token = authHeader.split(" ")[1]
    let verifyToken = jwt.verify(token, process.env.JWT_SECRET);
    if (!verifyToken.userId)
      return resp.status(401).json({ message: "SignUp Required" });
    req.user = verifyToken
    next()
  } catch (e) {
    return resp.status(401).json({ message: "Session expired, login again" });
  }
}

export default authMiddleware