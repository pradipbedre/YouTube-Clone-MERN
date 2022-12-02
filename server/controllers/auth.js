import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({ ...req.body, password: hashedPassword });
    const savedUser = await newUser.save();

    res.status(200).json(savedUser);
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  try {
    // find user
    const user = await User.findOne({ name: req.body.name });
    // not found then throw error
    !user && res.status(404).json("User not found");
    // if found then compare password
    const isCorrectPassword = await bcrypt.compareSync(
      req.body.password,
      user.password
    );
    // if password is not correct then throw error
    if (!isCorrectPassword)
      return next(createError(401, "Password is incorrect"));

    // if password is correct then create token
    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "5d",
    });

    // set token in cookie and sendn response
    const { password, ...others } = user._doc;
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);
  } catch (error) {
    next(error);
  }
};
