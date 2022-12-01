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
  res.send("Hello World! Server Is Running....");
});

//Routes

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/videos", videosRoutes);
app.use("/api/comments", commentRoutes);
// Server Listening
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
