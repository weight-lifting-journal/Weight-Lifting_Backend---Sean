exports.up = function(knex, Promise) {
  return knex.schema.createTable("exercise", exercise => {
    exercise.increments();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("exercise");
};
