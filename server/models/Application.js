const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    surname: String,
    firstName: String,
    dateOfBirth: String,
    phone: String,
    clan: String,
    village: String,
    ward: String,
    files: [String],
    status: { type: String, default: "pending" }, // pending / approved / rejected
  },
  { timestamps: true }
);

module.exports = mongoose.model("Application", applicationSchema);
