require("dotenv").config();
const express = require("express");
const db = require("../data/configKnex");
const auth = require("../middleware/auth");

const router = express.Router();

// POST AN EXERCISE CARD TO A JOURNAL
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

// GET ALL EXERCISE CARDS FOR A JOURNAL
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

// GET SPECIFIC EXERCISE CARD
router.get("/:journalId/exercises/:id", auth.protected, (req, res, next) => {
  const { sub } = req.decodedToken;
  const { journalId, id } = req.params;
  db("exercise")
    .where("exercise.journalId", journalId)
    .where("exercise.id", id)
    .where("exercise.userId", sub)
    .then(exercise => res.send(exercise))
    .catch(err => next(err));
});

// EDIT SPECIFIC EXERCISE CARD
router.put("/:journalId/exercises/:id", auth.protected, (req, res, next) => {
  const { sub } = req.decodedToken;
  const { journalId, id } = req.params;
  const updatedExercise = req.body;
  console.log(updatedExercise);
  db("exercise")
    .where("exercise.journalId", journalId)
    .where("exercise.id", id)
    .where("exercise.userId", sub)
    .update(updatedExercise)
    .then(num => res.json(num))
    .catch(err => next(err));
});

// DELETE AN EXERCISE CARD
router.delete("/:journalId/exercises/:id", auth.protected, (req, res, next) => {
  const { sub } = req.decodedToken;
  const { journalId, id } = req.params;
  db("exercise")
    .where("exercise.journalId", journalId)
    .where("exercise.id", id)
    .where("exercise.userId", sub)
    .del()
    .then(num => res.json(num))
    .catch(err => next(err));
});

module.exports = router;
