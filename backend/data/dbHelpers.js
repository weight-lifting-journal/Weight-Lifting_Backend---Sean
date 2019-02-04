const db = require("./configKnex");

module.exports = {
  insert: user => {
    db("users").insert(user);
  },
  findUsername: username => {
    db("users")
      .where({ username })
      .first();
  },
  findWorkouts: userId => {
    db("journal").where({ userId });
  },
  findSingleWorkout: workoutId => {
    db("journal").where({ workoutId });
  }
};
