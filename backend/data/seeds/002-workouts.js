exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("table_name")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("table_name").insert([
        {
          id: 1,
          date: "Feb 12, 2019",
          weekday: "Tue",
          time: "08:30 pm",
          exercises: [
            {
              name: "bench press",
              weight: "200lb",
              reps: 5,
              sets: 3,
              region: "chest"
            },
            { name: "curls", weight: "60lb", reps: 10, sets: 3, regions: arms }
          ]
        },
        {
          id: 1,
          date: "Feb 13, 2019",
          weekday: "Wed",
          time: "08:30 pm",
          exercises: [
            {
              name: "bench press",
              weight: "200lb",
              reps: 5,
              sets: 3,
              region: "chest"
            },
            { name: "curls", weight: "60lb", reps: 10, sets: 3, regions: arms }
          ]
        },
        {
          id: 2,
          date: "Feb 12, 2019",
          weekday: "Tue",
          time: "08:30 pm",
          exercises: [
            {
              name: "bench press",
              weight: "200lb",
              reps: 5,
              sets: 3,
              region: "chest"
            },
            { name: "curls", weight: "60lb", reps: 10, sets: 3, regions: arms }
          ]
        },
        {
          id: 2,
          date: "Feb 13, 2019",
          weekday: "Wed",
          time: "08:30 pm",
          exercises: [
            {
              name: "bench press",
              weight: "200lb",
              reps: 5,
              sets: 3,
              region: "chest"
            },
            { name: "curls", weight: "60lb", reps: 10, sets: 3, regions: arms }
          ]
        },
        {
          id: 3,
          date: "Feb 12, 2019",
          weekday: "Tue",
          time: "08:30 pm",
          exercises: [
            {
              name: "bench press",
              weight: "200lb",
              reps: 5,
              sets: 3,
              region: "chest"
            },
            { name: "curls", weight: "60lb", reps: 10, sets: 3, regions: arms }
          ]
        },
        {
          id: 3,
          date: "Feb 13, 2019",
          weekday: "Wed",
          time: "08:30 pm",
          exercises: [
            {
              name: "bench press",
              weight: "200lb",
              reps: 5,
              sets: 3,
              region: "chest"
            },
            { name: "curls", weight: "60lb", reps: 10, sets: 3, regions: arms }
          ]
        }
      ]);
    });
};
