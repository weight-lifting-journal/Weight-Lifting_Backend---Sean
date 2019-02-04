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
  findWorkouts: () => {
    return db("journal");
  },
  findSingleWorkout: workoutId => {
    return db("journal").where({ workoutId });
  }
};
