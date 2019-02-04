exports.up = function(knex, Promise) {
  return knex.schema.createTable("exercise", exercise => {
    exercise.increments();
    exercise.string("name", 150).notNullable();
  });
};

exports.down = function(knex, Promise) {};
