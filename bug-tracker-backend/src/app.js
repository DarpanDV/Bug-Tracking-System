const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// const authRoutes = require("./routes/auth");
const ticketRoutes = require("./routes/tickets");
// const projectRoutes = require("./routes/projects");

const app = express();

/* ========== MIDDLEWARE ========== */
app.use(cors());
app.use(express.json());

/* ========== ROUTES ========== */
// app.use("/api/auth", authRoutes);
app.use("/api/tickets", ticketRoutes);
// app.use("/api/projects", projectRoutes);

/* ========== HEALTH CHECK ========== */
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "Bug Tracker API running" });
});

/* ========== ERROR HANDLER ========== */
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong" });
});

/* ========== DB + SERVER ========== */
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () =>
      console.log(`Server running on port ${PORT}`)
    );
  })
  .catch(err => {
    console.error("DB connection failed", err);
  });

module.exports = app;
