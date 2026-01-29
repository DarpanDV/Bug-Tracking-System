const express = require("express");
const auth = require("../middleware/authMiddleware");
const {
  createTicket,
  getTickets,
  updateTicket,
} = require("../controllers/ticketController");

const router = express.Router();

router.post("/", auth, createTicket);
router.get("/", auth, getTickets);
router.put("/:id", auth, updateTicket);

module.exports = router;
