require("dotenv").config();
const express = require("express");
const dbHelper = require("../data/dbHelpers");
const db = require("../data/configKnex");
const auth = require("../middleware/auth");

const router = express.Router();

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

router.get("/", auth.protected, (req, res, next) => {
  dbHelper
    .findWorkoutsJournal(req.decodedToken.sub)
    .then((journalObj, cards) => {
      console.log(cards);

      res.status(200).json({ ...journalObj, cards });
    })
    .catch(err => {
      next(err);
    });
});
router.get("/:journalId", auth.protected, (req, res, next) => {
  const { journalId } = req.params;
  dbHelper
    .findSingleWorkoutJournal(journalId, req.decodedToken.sub)
    .then(journal =>
      res
        .status(200)
        .send(journal)
        .catch(err => next(err))
    );
});

module.exports = router;
