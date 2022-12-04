import express from "express";
import {} from "../controllers/comment.js";
const router = express.Router();
import verifyToken from "../utils/verifyToken.js";
import {
  addComment,
  deleteComment,
  getComments,
} from "../controllers/comment.js";
// add comment
router.post("/", verifyToken, addComment);
// delete comment
router.delete("/:id", verifyToken, deleteComment);
// get comment
router.get("/:videoId", verifyToken, getComments);

export default router;
