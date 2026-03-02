import express from "express";
import { createTikTokScanController, getPendingTikTokTask, updateTikTokTask } from "../controllers/tiktok.controller.js";

const router = express.Router();

router.post("/scan", createTikTokScanController);
router.get("/task/pending", getPendingTikTokTask);
router.patch("/task/:id", updateTikTokTask);

export default router;