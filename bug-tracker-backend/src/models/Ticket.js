const mongoose = require("mongoose");
const ticketSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: {
    type: String,
    enum: ["OPEN", "IN_PROGRESS", "DONE"],
    default: "OPEN"
  },
  priority: {
    type: String,
    enum: ["LOW", "MEDIUM", "HIGH"],
    default: "MEDIUM"
  },
  project: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

module.exports = mongoose.model("Ticket", ticketSchema);
