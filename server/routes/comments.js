import express from "express";
import {} from "../controllers/comment.js";
const router = express.Router();
import verifyToken from "../utils/verifyToken.js";
import {
  addComment,
  deleteComment,
  getComments,
} from "../controllers/comment.js";

router.post("/", verifyToken, addComment);
router.delete("/:id", verifyToken, deleteComment);
router.get("/:videoId", verifyToken, getComments);

export default router;
