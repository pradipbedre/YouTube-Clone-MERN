import express from "express";
const router = express.Router();
import verifyToken from "../utils/verifyToken.js";
import {
  updateUser,
  deleteUser,
  getUser,
  subscribeUser,
  unsubscribeUser,
  likeVideo,
  deslikeVideo,
} from "../controllers/user.js";
// update user
router.put("/:id", verifyToken, updateUser);

// delete user
router.delete("/:id", verifyToken, deleteUser);

// get user
router.get("/find/:id", getUser);

// subscribe a user
router.put("/sub/:id", verifyToken, subscribeUser);

// unsubscribe a user
router.put("/unsub/:id", verifyToken, unsubscribeUser);

// like a video
router.put("/like/:videoId", verifyToken, likeVideo);

// deslike a video
router.put("/dislike/:videoId", verifyToken, deslikeVideo);

export default router;
