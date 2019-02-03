exports.up = function(knex, Promise) {
  return knex.schema.createTable("workouts", workout => {
    workout.increments();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("workouts");
};
