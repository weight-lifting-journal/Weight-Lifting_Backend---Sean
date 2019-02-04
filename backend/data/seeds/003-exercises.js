exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("exercise")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("exercise").insert([
        {
          name: "bench press"
        },
        {
          name: "curls"
        }
      ]);
    });
};
