
const router = require("express").Router();
const auth = require("../middleware/auth");
const ctrl = require("../controllers/ticketController");

router.post("/", auth, ctrl.createTicket);
router.get("/", auth, ctrl.getTickets);

module.exports = router;
