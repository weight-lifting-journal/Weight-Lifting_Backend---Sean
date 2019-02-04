const db = require("./configKnex");

module.exports = {
  insert: user => {
    return db("users").insert(user);
  },
  findUsername: username => {
    return db("users")
      .where({ username })
      .first();
  },
  findWorkouts: () => {
    return db("journal");
  },
  findSingleWorkout: workoutId => {
    return db("journal").where({ workoutId });
  }
};
