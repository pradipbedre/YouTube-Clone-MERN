import express from "express";
import verifyToken from "../utils/verifyToken.js";
const router = express.Router();
import {
  addVideo,
  updateVideo,
  deleteVideo,
  getVideo,
  addView,
  randomVideos,
  trendVideos,
  subVideos,
  getByTag,
  search
} from "../controllers/video.js";

// Add a video
router.post("/", verifyToken, addVideo);
// update a video
router.put("/:id", verifyToken, updateVideo);
// delete a video
router.delete("/:id", verifyToken, deleteVideo);
// get a video
router.get("/find/:id", verifyToken, getVideo);
// increase views
router.put("/view/:id", addView);
// treanding video
router.get("/trend", trendVideos);
// on home page random videos
router.get("/random", randomVideos);
// subscribed channel videos
router.get("/sub", subVideos);
// get by tags 
router.get("/tags", getByTag);
// get by title 
router.get("/search", search);

export default router;
