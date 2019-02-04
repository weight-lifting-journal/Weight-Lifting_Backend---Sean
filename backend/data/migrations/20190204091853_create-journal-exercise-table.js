exports.up = function(knex, Promise) {
  return knex.schema.createTable("journal-exercise", tbl => {
    tbl.increments();

    tbl
      .integer("journalId")
      .unsigned()
      .references("id")
      .inTable("journal");
    tbl
      .integer("exerciseId")
      .unsigned()
      .references("id")
      .inTable("exercise");
    tbl.integer("reps").notNullable();
    tbl.integer("sets").notNullable();
    tbl.string("weight", 150).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("journal-exercise");
};
