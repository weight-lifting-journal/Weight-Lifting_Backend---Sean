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
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("journal-exercise");
};
