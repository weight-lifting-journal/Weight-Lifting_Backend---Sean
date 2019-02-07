const request = require("supertest");
const db = require("../data/configKnex");
const exerciseRouter = require("./exerciseRouter");

// afterEach(async () => {
//   await db('exercise').truncate();
// });

describe("exercise router", () => {
  describe("GET to /workouts/1/exercises/1", () => {
    it("should return an object like below", async () => {
      const expected = {
        id: 1,
        journalId: 1,
        userId: 1,
        name: "bench press",
        reps: 12,
        sets: 3,
        weight: "190lbs"
      };
      let exercise = await request(exerciseRouter).get(
        "/workouts/1/exercises/1"
      );

      expect(exercise).toEqual(expected);
    });
  });
});
