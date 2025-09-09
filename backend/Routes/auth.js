const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../Models/User");
const authMiddleware = require(".././Middlewares/authMiddleware"); 

const router = express.Router();

// Register
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ msg: "User already exists" });

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // save user (use username, not name)
    const newUser = new User({ username: name, email, password: hashedPassword });
    await newUser.save();

    // generate token
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    // return token + user info
    res.status(201).json({
      msg: "User registered successfully backend!✅",
      token,
      user: { id: newUser._id, username: newUser.username, email: newUser.email }
    });
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
});


// Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // check user
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "User not found" });

    // check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    // generate token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.json({ token, user: { id: user._id, username: user.username, email: user.email } });
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
});


// ================= PROFILE (protected) =================
router.get("/profile", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password"); // exclude password
    if (!user) return res.status(404).json({ msg: "User not found" });

    res.json(user);
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
});

module.exports = router;
