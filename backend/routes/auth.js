const express = require("express");
const User = require("../models/User");
const router = express.Router();

router.post("/send", async (req, res) => {
  try {
    const { Numberid } = req.body;
    const existing = await User.findOne({ Numberid });
    const user1 = await User.find().distinct("Numberid")
    if (existing) {
      return res.json({ existing: false ,user1});
    } else {
      return res.json({ existing: true });
    }
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

router.post("/add", async (req, res) => {
  try {
    const { Numberid, username, email, password } = req.body;
    const existing = await User.findOne({ Numberid });
    if (existing) {
      return res.json({ message: "User already exists" });
    }
    const newUser = await User.create({ Numberid, username, email, password });
    res.json({ message: "User added successfully", user: newUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
