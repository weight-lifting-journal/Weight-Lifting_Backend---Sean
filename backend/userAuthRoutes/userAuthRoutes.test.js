const request = require("supertest");
const server = require("../api/server");

describe("user auth router", () => {
  describe("POST to /users/register", () => {
    it("should return a 201 status when inserting a new user", async () => {
      const expected = 201;
      const user = {
        username: "test user",
        password: "pass",
        email: "testemail@email.com"
      };
      let res = await request(server)
        .post("/users/register")
        .send(user);

      expect(res.status).toEqual(expected);
    });
  });
});
