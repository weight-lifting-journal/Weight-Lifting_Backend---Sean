exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("journal")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("journal").insert([
        {
          userId: 1,
          date: "Feb 12, 2019",
          region: "upper body"
        },
        {
          userId: 2,
          date: "Feb 12, 2019",
          region: "upper body"
        },
        {
          userId: 3,
          date: "Feb 12, 2019",
          region: "upper body"
        }
      ]);
    });
};
