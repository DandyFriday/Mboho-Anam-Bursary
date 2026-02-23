const express = require("express");
const multer = require("multer");
const path = require("path");
const Application = require("../models/Application");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, path.join(__dirname, "../uploads")),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname.replace(/\s+/g, "_")),
});
const upload = multer({ storage });

router.post("/", authMiddleware, upload.array("files", 5), async (req, res) => {
  const applicant = req.user;
  const existing = await Application.findOne({ user: applicant._id });
  if (existing) return res.status(400).json({ message: "Application already exists" });

  const files = (req.files || []).map((f) => `/uploads/${f.filename}`);
  const payload = { user: applicant._id, ...req.body, files };
  const app = await Application.create(payload);
  res.json({ application: app });
});

// get my application
router.get("/my", authMiddleware, async (req, res) => {
  const app = await Application.findOne({ user: req.user._id });
  res.json({ application: app });
});

module.exports = router;
