exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("exercise")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("exercise").insert([
        {
          journalId: 1,
          name: "bench press",
          reps: 12,
          sets: 3,
          weight: "190lbs"
        },
        { journalId: 1, name: "curls", reps: 12, sets: 3, weight: "90lbs" },
        {
          journalId: 2,
          name: "bench press",
          reps: 12,
          sets: 3,
          weight: "190lbs"
        },
        { journalId: 2, name: "curls", reps: 12, sets: 3, weight: "90lbs" },
        {
          journalId: 3,
          name: "bench press",
          reps: 12,
          sets: 3,
          weight: "190lbs"
        },
        { journalId: 3, name: "curls", reps: 12, sets: 3, weight: "90lbs" }
      ]);
    });
};
