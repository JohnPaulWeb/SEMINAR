const express = require("express");
const router = express.Router();

const User = require("../models/user.model");
const Task = require("../models/task.model");

// ✅ Create User + Task
router.post("/create", async (req, res) => {
  try {
    const { name, email, title, description } = req.body;

    const user = await User.create({ name, email });

    const task = await Task.create({
      title,
      description,
      userId: user._id,
    });

    res.json({ user, task });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Get all tasks with user info (populate)
router.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find().populate("userId");
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;