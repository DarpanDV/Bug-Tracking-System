const Ticket = require("../models/Ticket");

exports.createTicket = async (req, res) => {
  const ticket = await Ticket.create(req.body);
  res.status(201).json(ticket);
};

exports.getTickets = async (req, res) => {
  const tickets = await Ticket.find()
    .populate("assignedTo", "name email")
    .populate("project", "name");
  res.json(tickets);
};

exports.updateTicket = async (req, res) => {
  const ticket = await Ticket.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(ticket);
};
