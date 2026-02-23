const express = require("express");
const Application = require("../models/Application");
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

const router = express.Router();

// list applications (admin)
router.get("/applications", authMiddleware, roleMiddleware("admin"), async (req, res) => {
  const apps = await Application.find().populate("user", "name email");
  res.json({ applications: apps });
});

// update status
router.patch("/applications/:id", authMiddleware, roleMiddleware("admin"), async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const app = await Application.findByIdAndUpdate(id, { status }, { new: true });
  res.json({ application: app });
});

module.exports = router;
