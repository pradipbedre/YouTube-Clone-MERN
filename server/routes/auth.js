import express from "express";
const router = express.Router();
import {signup} from "../controllers/auth.js";

// Create User:  SignUp
router.post("/signup", signup);

// signIn
router.post("/signin", (req, res) => {});

// google Auth
router.post("/google", (req, res) => {});

export default router;
