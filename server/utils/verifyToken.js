import jwt from "jsonwebtoken";
import { createError } from "../error";

const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token)
    return next(createError(401, "Access denied. No token provided."));

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) return next(createError(401, "Invalid token."));
    req.user = decoded;
    next();
  });
};
export default verifyToken;
