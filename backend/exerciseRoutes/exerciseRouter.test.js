const request = require("supertest");
const server = require("../api/server");

describe("exercise router", () => {
  describe("GET to /workouts/1/exercises", () => {
    it("should return a 401 unauthorized when no token is provided", async () => {
      const expected = 401;
      let exercise = await request(server).get("/workouts/1/exercises");

      expect(exercise.status).toEqual(expected);
    });
  });
});
