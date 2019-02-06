const db = require("./configKnex");

module.exports = {
  insert: user => {
    return db("users").insert(user);
  },
  findUsername: email => {
    return db("users")
      .where({ email })
      .first();
  },
  findWorkoutsJournal: async id => {
    const journalsObj = await db("journal")
      .select({
        id: "journal.id",
        date: "journal.date",
        region: "   journal.region"
      })
      .where("journal.userId", id);
    const exerciseCards = await db("exercise")
      .select({
        id: "exercise.id",
        journalId: "journal.id",
        name: "exercise.name",
        reps: "exercise.reps",
        sets: "exercise.sets",
        weight: "exercise.weight"
      })
      .join("journal", "journal.id", "exercise.journalId")
      .where("exercise.userId", id);
    return { journalsObj, exerciseCards };
  },
  findSingleWorkoutJournal: async (journalId, id) => {
    const singleJournal = await db("journal")
      .select({
        id: "journal.id",
        date: "journal.date",
        region: "journal.region"
      })
      .where("journal.userId", id)
      .where("journal.id", journalId);
    return singleJournal;
  },
  deleteSingleWorkoutJournal: async (journalId, id) => {
    return await db("journal")
      .select({
        id: "journal.id",
        date: "journal.date",
        region: "journal.region"
      })
      .where("journal.userId", id)
      .where("journal.id", journalId)
      .del();
  },
  updateSingleWorkoutJournal: async (journalId, id, newJournal) => {
    return await db("journal")
      .select({
        id: "journal.id",
        date: "journal.date",
        region: "journal.region"
      })
      .where("journal.userId", id)
      .where("journal.id", journalId)
      .update(newJournal);
  }
};
