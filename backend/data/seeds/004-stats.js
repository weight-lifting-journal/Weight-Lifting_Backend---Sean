exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("journal-exercise")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("journal-exercise").insert([
        {
          exerciseId: 1,
          journalId: 1,
          reps: 12,
          sets: 3,
          weight: "190lbs"
        },
        {
          exerciseId: 2,
          journalId: 1,
          reps: 12,
          sets: 3,
          weight: "90lbs"
        },
        {
          exerciseId: 1,
          journalId: 2,
          reps: 12,
          sets: 3,
          weight: "190lbs"
        },
        {
          exerciseId: 2,
          journalId: 2,
          reps: 12,
          sets: 3,
          weight: "90lbs"
        },

        {
          exerciseId: 1,
          journalId: 3,
          reps: 12,
          sets: 3,
          weight: "190lbs"
        },
        {
          exerciseId: 2,
          journalId: 3,
          reps: 12,
          sets: 3,
          weight: "90lbs"
        }
      ]);
    });
};
