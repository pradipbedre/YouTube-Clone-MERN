import { createError } from "../error.js";
import Video from "../models/video";
import User from "../models/User";

/* ----------------------------------------------------------------------- */
export const updateUser = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (error) {
      next(error);
    }
  } else {
    return next(createError(400, "You can update only your account!"));
  }
};
/* ----------------------------------------------------------------------- */
export const deleteUser = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been deleted...");
    } catch (error) {
      next(error);
    }
  } else {
    return next(createError(400, "You can delete only your account!"));
  }
};
/* ----------------------------------------------------------------------- */
export const getUser = async (req, res, next) => {
  try {
    const userFound = await User.findById(req.params.id);
    res.status(200).json(userFound);
  } catch (error) {
    next(error);
  }
};
/* ----------------------------------------------------------------------- */
export const subscribeUser = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.params.id, {
      $push: { subscribedUsers: req.user.id },
    });

    await User.findByIdAndUpdate(req.user.id, {
      $inc: { subscribers: 1 },
    });

    res.status(200).json("User has been subscribed");
  } catch (error) {
    next(error);
  }
};
/* ----------------------------------------------------------------------- */
export const unsubscribeUser = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.params.id, {
      $pull: { subscribedUsers: req.user.id },
    });

    await User.findByIdAndUpdate(req.user.id, {
      $inc: { subscribers: -1 },
    });

    res.status(200).json("User has been unsubscribed");
  } catch (error) {
    next(error);
  }
};
/* ----------------------------------------------------------------------- */
export const likeVideo = async (req, res, next) => {
  const id = req.user.id;
  const videoId = req.params.videoId;
  try {
    await Video.findByIdAndUpdate(videoId, {
      // addtoset will not add the same id twice
      $addToSet: { likes: id },
      $pull: { dislikes: id },
    });
    res.status(200).json("Video has been liked");
  } catch (error) {
    next(error);
  }
};

/* ----------------------------------------------------------------------- */
export const deslikeVideo = async (req, res, next) => {
  const id = req.user.id;
  const videoId = req.params.videoId;
  try {
    await Video.findByIdAndUpdate(videoId, {
      // addtoset will not add the same id twice
      $addToSet: { dislikes: id },
      $pull: { likes: id },
    });
    res.status(200).json("Video has been dis-liked");
  } catch (error) {
    next(error);
  }
};
