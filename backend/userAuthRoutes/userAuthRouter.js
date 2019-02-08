require("dotenv").config();
const express = require("express");
const bcrypt = require("bcryptjs");
const db = require("../data/dbHelpers");
const auth = require("../middleware/auth");

const router = express.Router();

// REGISTER USER
router.post("/register", (req, res, next) => {
  const user = req.body;
  user.password = bcrypt.hashSync(user.password, 12);
  db.insert(user)
    .then(userId => {
      console.log("USER: ", userId[0], "BODY", req.body);

      const token = auth.generateToken({ id: userId[0], ...req.body });
      res.status(201).json({ message: `welcome ${user.username}`, token });
    })
    .catch(err => {
      if (err.errno === 19) {
        res.status(406).json({ message: "Username already taken" });
      } else {
        next(err);
      }
    });
});

// LOGIN USER
router.post("/login", (req, res, next) => {
  const userCreds = req.body;
  db.findUsername(userCreds.email)
    .then(user => {
      console.log("LOGIN USER", user);

      if (user && bcrypt.compareSync(userCreds.password, user.password)) {
        const token = auth.generateToken(user);
        res.json({ message: `welcome ${user.username}`, token });
      } else {
        res.status(401).json({ message: "Invalid Username/Password" });
      }
    })
    .catch(err => next(err));
});

module.exports = router;
