import { createTikTokScan } from "../services/tiktok.service.js";
import TikTokTask from "../models/TikTokTask.model.js";

export async function createTikTokScanController(req, res) {
  try {
    const request = await createTikTokScan(req.body);
    res.json({
      success: true,
      data: request,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
}

export async function getPendingTikTokTask(req, res) {
  try {
    const task = await TikTokTask.findOneAndUpdate(
      { status: "pending" },
      { status: "running" },
      {
        sort: { createdAt: 1 },
        new: true,
      }
    );

    if (!task) {
      return res.json({
        success: true,
        data: null,
        message: "No pending TikTok task",
      });
    }

    res.json({
      success: true,
      data: task,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
}

export async function updateTikTokTask(req, res) {
  try {
    const { id } = req.params;
    const { status, result, error_message } = req.body;

    if (!["success", "error"].includes(status)) {
      return res.status(400).json({
        success: false,
        message: "status must be success or error",
      });
    }

    const updateData = {
      status,
      updatedAt: new Date(),
    };

    if (status === "success") {
      updateData.result = result;
    }

    if (status === "error") {
      updateData.error_message = error_message || "Unknown error";
    }

    const task = await TikTokTask.findByIdAndUpdate(
      id,
      updateData,
      { new: true }
    );

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "TikTok task not found",
      });
    }

    res.json({
      success: true,
      data: task,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
}