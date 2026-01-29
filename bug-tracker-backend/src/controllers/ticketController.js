// controllers/ticketController.js
const Ticket = require("../models/Ticket");

exports.createTicket = async (req, res) => {
  const ticket = await Ticket.create({
    ...req.body,
    createdBy: req.user.id
  });
  res.json(ticket);
};

exports.getTickets = async (req, res) => {
  const tickets = await Ticket.find()
    .populate("assignedTo")
    .populate("project");
  res.json(tickets);
};
