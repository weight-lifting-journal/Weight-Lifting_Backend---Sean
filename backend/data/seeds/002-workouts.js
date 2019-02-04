exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("journal")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("journal").insert([
        {
          id: 1,
          date: "Feb 12, 2019",
          region: "upper body"
        },
        {
          id: 2,
          date: "Feb 12, 2019",
          region: "upper body"
        },
        {
          id: 3,
          date: "Feb 13, 2019",
          region: "upper body"
        }
      ]);
    });
};
