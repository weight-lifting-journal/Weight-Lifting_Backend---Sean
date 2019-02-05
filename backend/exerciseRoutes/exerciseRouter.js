require("dotenv").config();
const express = require("express");
const db = require("../data/configKnex");
const auth = require("../middleware/auth");

const router = express.Router();

router.post("/:journalId/exercises", auth.protected, (req, res, next) => {
  const {
    body: { name, reps, sets, weight },
    params: { journalId }
  } = req;
  const exercisePost = {
    userId: req.decodedToken.sub,
    journalId,
    name,
    reps,
    sets,
    weight
  };
  db("exercise")
    .insert(exercisePost)
    .then(ids => res.status(201).send({ id: ids[0] }))
    .catch(err => next(err));
});

router.get("/", auth.protected, (req, res, next) => {});

module.exports = router;
