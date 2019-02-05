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
    const journalObj = await db("journal")
      // .select({
      //   id: "journal.id",
      //   date: "journal.date",
      //   region: "   journal.region"
      // })
      .where("journal.userId", id);
    // .join('')
    const cards = await db("exercise")
      .select({
        journalId: "journal.id",
        name: "exercise.name",
        reps: "exercise.reps",
        sets: "exercise.sets",
        weight: "exercise.weight"
      })
      .join("journal", "journal.id", "exercise.journalId")
      .where("exercise.userId", id);
    return { journalObj, ...cards };
  },
  // findJournalExercises: id => {
  //   const exercises = db("exercise")
  //     .select({
  //       exerciseId: "exercise.id",
  //       journalId: "journal.id",
  //       name: "exercise.name",
  //       weight: "journal-exercise.weight",
  //       reps: "journal-exercise.reps",
  //       sets: "journal-exercise.sets"
  //     })
  //     .join("journal-exercise", "journal-exercise.exerciseId", "exercise.id")
  //     .join("journal", "journal.id", "journal-exercise.journalId")
  //     .where("journal.id", id);
  //   return exercises;
  // },
  findSingleWorkoutJournal: (journalId, id) => {
    return db("journal")
      .select({
        id: "journal.id",
        date: "journal.date",
        region: "journal.region"
      })
      .where("journal.userId", id)
      .where("journal.id", journalId);
  }
};
