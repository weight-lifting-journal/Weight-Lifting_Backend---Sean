exports.up = function(knex, Promise) {
  return knex.schema.createTable("regions", region => {
    region.increments();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("regions");
};
