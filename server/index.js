import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
const app = express();
const port = process.env.PORT || 2000;
import userRoutes from "./routes/users.js";
import commentRoutes from "./routes/comments.js";
import videosRoutes from "./routes/videos.js";
import authRoutes from "./routes/auth.js";
import cookieParser from "cookie-parser";

// middlewares for express
dotenv.config();
app.use(express.json());
app.use(cors());


// MongoDB connection
async function main() {
  await mongoose.connect(process.env.DB_URL);
}
main()
  .then(() => {
    console.log("DB Connected...");
  })
  .catch((err) => {
    console.log(err);
  });

// Default Routes
app.get("/", (req, res) => {
  res.send("Hello World! Youtube Server Is Running....");
});

//Routes
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/videos", videosRoutes);
app.use("/api/comments", commentRoutes);

// Specific Error handing using middleware
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "something went wrong!";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

// Server Listening
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
