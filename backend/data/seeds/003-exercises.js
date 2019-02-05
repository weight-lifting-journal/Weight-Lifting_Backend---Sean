exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("exercise")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("exercise").insert([
        {
          userId: 1,
          journalId: 1,
          name: "bench press",
          reps: 12,
          sets: 3,
          weight: "190lbs"
        },
        {
          userId: 1,
          journalId: 1,
          name: "curls",
          reps: 15,
          sets: 3,
          weight: "60lbs"
        },
        {
          userId: 2,
          journalId: 2,
          name: "leg press",
          reps: 12,
          sets: 3,
          weight: "250lbs"
        },
        {
          userId: 2,
          journalId: 2,
          name: "military press",
          reps: 12,
          sets: 3,
          weight: "130lbs"
        },
        {
          userId: 2,
          journalId: 2,
          name: "squats",
          reps: 12,
          sets: 3,
          weight: "230lbs"
        },
        {
          userId: 3,
          journalId: 3,
          name: "hammer press",
          reps: 12,
          sets: 3,
          weight: "85lbs"
        },
        {
          userId: 3,
          journalId: 3,
          name: "bench press",
          reps: 12,
          sets: 3,
          weight: "190lbs"
        },
        {
          userId: 4,
          journalId: 4,
          name: "curls",
          reps: 15,
          sets: 3,
          weight: "60lbs"
        },
        {
          userId: 1,
          journalId: 5,
          name: "leg press",
          reps: 12,
          sets: 3,
          weight: "250lbs"
        },
        {
          userId: 2,
          journalId: 6,
          name: "military press",
          reps: 12,
          sets: 3,
          weight: "130lbs"
        },
        {
          userId: 3,
          journalId: 7,
          name: "squats",
          reps: 12,
          sets: 3,
          weight: "230lbs"
        },
        {
          userId: 4,
          journalId: 8,
          name: "hammer press",
          reps: 12,
          sets: 3,
          weight: "85lbs"
        }
      ]);
    });
};
