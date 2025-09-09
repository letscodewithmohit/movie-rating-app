require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./Routes/auth");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => res.send("Server is working 🚀"));

// debug: see what env is loaded
// console.log("MONGO_URI =", process.env.MONGO_URL);
// console.log("JWT_SECRET =", !!process.env.JWT_SECRET);

mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.log("DB Error: ", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
