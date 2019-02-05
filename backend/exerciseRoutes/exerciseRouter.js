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

router.get("/:journalId/exercises", auth.protected, (req, res, next) => {
  const { sub } = req.decodedToken;
  const { journalId } = req.params;
  db("exercise")
    .where("exercise.journalId", journalId)
    .where("exercise.userId", sub)
    // .findJournalExercises(sub)
    .then(exercises => {
      console.log(exercises);
      res.send(exercises);
    })
    .catch(err => next(err));
});

module.exports = router;
