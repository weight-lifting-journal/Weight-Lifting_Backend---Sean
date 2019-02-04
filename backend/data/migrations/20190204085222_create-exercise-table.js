exports.up = function(knex, Promise) {
  return knex.schema.createTable("exercise", exercise => {
    exercise.increments();
    exercise
      .integer("journalId")
      .unsigned()
      .references("id")
      .inTable("journal");
    exercise.string("name", 150).notNullable();
    exercise.integer("reps").notNullable();
    exercise.integer("sets").notNullable();
    exercise.string("weight", 150).notNullable();
  });
};

exports.down = function(knex, Promise) {};
