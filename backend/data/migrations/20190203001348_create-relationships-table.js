exports.up = function(knex, Promise) {
  return knex.schema.createTable("relationships", relationship => {
    relationship.increments();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("relationships");
};
