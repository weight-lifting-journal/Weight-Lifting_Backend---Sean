exports.up = function(knex, Promise) {
  return knex.schema.createTable("journal", journalTbl => {
    journalTbl.increments();

    journalTbl
      .integer("userId")
      .unsigned()
      .references("id")
      .inTable("users");
    journalTbl.string("date").notNullable();
    journalTbl.string("region", 150).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("journal");
};
