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
    db("workouts").where({ userId });
  },
  findSingleWorkout: workoutId => {
    db("workouts").where({ workoutId });
  }
};
