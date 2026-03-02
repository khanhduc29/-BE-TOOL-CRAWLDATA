import express from "express";
import { createGoogleMapJobController, getPendingGoogleMapTask, updateGoogleMapTask } from "../controllers/googleMap.controller.js";

const router = express.Router();

router.post("/scan", createGoogleMapJobController);
router.get("/task/pending", getPendingGoogleMapTask);
router.patch("/task/:id", updateGoogleMapTask);

export default router;