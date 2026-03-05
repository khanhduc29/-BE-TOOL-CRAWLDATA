import express from "express";

import {
  createScan,
  getPendingTasks,
  getSuccessTasks,
} from "../controllers/pinterest.controller.js";

const router = express.Router();

router.post("/scan", createScan);

router.get("/tasks/pending", getPendingTasks);

router.get("/tasks/success", getSuccessTasks);

export default router;