require("dotenv").config();
const express = require("express");
const dbHelper = require("../data/dbHelpers");
const db = require("../data/configKnex");
const auth = require("../middleware/auth");

const router = express.Router();

// POST A NEW JOURNAL
router.post("/", auth.protected, (req, res, next) => {
  const {
    body: { date, region }
  } = req;
  const userId = req.decodedToken.sub;
  const journalPost = { date, region, userId };
  db("journal")
    .insert(journalPost)
    .then(ids => res.status(201).send({ id: ids[0] }))
    .catch(err => next(err));
});

// GET JOURNALS
router.get("/", auth.protected, (req, res, next) => {
  dbHelper
    .findWorkoutsJournal(req.decodedToken.sub)
    .then(journalsObj => {
      res.status(200).send(journalsObj);
    })
    .catch(err => {
      next(err);
    });
});

// GET SINGLE JOURNAL
router.get("/:journalId", auth.protected, async (req, res) => {
  const { journalId } = req.params;
  await dbHelper
    .findSingleWorkoutJournal(journalId, req.decodedToken.sub)
    .then(journal => res.json(journal));
});

// EDIT SINGLE JOURNAL
router.put("/:journalId", auth.protected, async (req, res) => {
  const { journalId } = req.params;
  const newJournal = req.body;
  await dbHelper
    .updateSingleWorkoutJournal(journalId, req.decodedToken.sub, newJournal)
    .then(num => res.json(num));
});

// DELETE SINGLE JOURNAL
router.delete("/:journalId", auth.protected, async (req, res) => {
  const { journalId } = req.params;
  await dbHelper
    .deleteSingleWorkoutJournal(journalId, req.decodedToken.sub)
    .then(num => res.json(num));
});

module.exports = router;
