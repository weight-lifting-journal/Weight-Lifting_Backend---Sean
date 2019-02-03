exports.up = function(knex, Promise) {
  return knex.schema.createTable("progress", tbl => {
    tbl.increments();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("progress");
};
