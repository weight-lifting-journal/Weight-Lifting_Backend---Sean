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
          region: "legs"
        },

        {
          userId: 4,
          date: "Feb 12, 2019",
          region: "upper body"
        },
        {
          userId: 1,
          date: "Feb 13, 2019",
          region: "legs"
        },
        {
          userId: 2,
          date: "Feb 13, 2019",
          region: "upper body"
        },
        {
          userId: 3,
          date: "Feb 13, 2019",
          region: "upper body"
        },
        {
          userId: 4,
          date: "Feb 13, 2019",
          region: "arms"
        },
        {
          userId: 1,
          date: "Feb 14, 2019",
          region: "legs"
        },
        {
          userId: 2,
          date: "Feb 14, 2019",
          region: "upper body"
        },
        {
          userId: 3,
          date: "Feb 14, 2019",
          region: "lower body"
        },
        {
          userId: 4,
          date: "Feb 14, 2019",
          region: "upper body"
        }
      ]);
    });
};
