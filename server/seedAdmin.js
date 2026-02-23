require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./models/User");

async function run() {
  await mongoose.connect(process.env.MONGO_URI);
  const hashed = await bcrypt.hash("AdminPassword123", 10);
  const admin = await User.create({ name: "Admin", email: "admin@site.com", password: hashed, role: "admin" });
  console.log("Admin created", admin._id);
  process.exit(0);
}

run().catch((e)=>{console.error(e); process.exit(1)});
