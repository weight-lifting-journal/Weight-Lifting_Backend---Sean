const request = require("supertest");
const server = require("../api/server");

describe("journal router", () => {
  describe("GET to /workouts/", () => {
    it("should return a 401 unauthorized when no token is provided", async () => {
      const expected = 401;
      let res = await request(server).get("/workouts/");

      expect(res.status).toEqual(expected);
    });
  });
});
