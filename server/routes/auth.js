import express from "express";
const router = express.Router();
import {googleAuth, signin, signup} from "../controllers/auth.js";

// Create User:  SignUp
router.post("/signup", signup);

// signIn
router.post("/signin", signin);

// google Auth
 router.post("/google",googleAuth);

export default router;
