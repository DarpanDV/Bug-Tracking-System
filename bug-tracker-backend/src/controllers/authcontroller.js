
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.register = async (req, res) => {
  const hashedPwd = await bcrypt.hash(req.body.password, 10);
  const user = await User.create({ ...req.body, password: hashedPwd });
  res.json(user);
};

exports.login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(401).json({ message: "Invalid user" });

  const isValid = await bcrypt.compare(req.body.password, user.password);
  if (!isValid) return res.status(401).json({ message: "Wrong password" });

  const token = jwt.sign({ id: user._id }, "SECRET");
  res.json({ token });
};
