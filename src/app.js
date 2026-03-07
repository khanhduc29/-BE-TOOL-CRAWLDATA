import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import tiktokRoute from "./routes/tiktok.route.js";
import googleMapRoute from "./routes/googleMap.route.js";
import youtubeRoute from "./routes/youtube.route.js";
import pinterestRoute from "./routes/pinterest.route.js";
import instagramRoutes from "./routes/instagram.routes.js";

dotenv.config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});
app.use("/api/tiktok", tiktokRoute);
app.use("/api/google-map", googleMapRoute);
app.use("/api/youtube", youtubeRoute);


app.use("/api/pinterest", pinterestRoute);
app.use("/api/instagram", instagramRoutes);

// start server
const PORT = process.env.PORT || 3000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
});