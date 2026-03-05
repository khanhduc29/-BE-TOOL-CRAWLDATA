import {
  createPinterestScan,
  getPendingPinterestTasks,
  getSuccessPinterestTasks,
} from "../services/pinterest.service.js";

/**
 * CREATE SCAN
 */
export async function createScan(req, res) {
  try {
    const request = await createPinterestScan(req.body);

    res.json({
      success: true,
      data: request,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
}

/**
 * GET PENDING TASK
 */
export async function getPendingTasks(req, res) {
  try {
    const limit = parseInt(req.query.limit) || 5;

    const tasks = await getPendingPinterestTasks(limit);

    res.json({
      success: true,
      total: tasks.length,
      data: tasks,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
}

/**
 * GET SUCCESS TASK
 */
export async function getSuccessTasks(req, res) {
  try {
    const limit = parseInt(req.query.limit) || 20;

    const tasks = await getSuccessPinterestTasks(limit);

    res.json({
      success: true,
      total: tasks.length,
      data: tasks,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
}