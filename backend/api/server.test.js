const request = require("supertest");
const server = require("./server");

describe("server.js", () => {
  describe('root dir "/" endpoint', () => {
    it("should respond with a 200 statuscode", () => {
      const expected = 200;

      request(server)
        .get("/")
        .then(res => {
          expect(res.status).toEqual(expected);
        });
    });
    it("should respond with json", () => {
      request(server)
        .get("/")
        .then(res => {
          expect(res.type).toMatch(/json/i);
        });
    });
    it('should respond with the following json object {message: "👋🌎🌍🌏, root dir sanity check"}', () => {
      const expected = { message: "👋🌎🌍🌏, root dir sanity check" };
      request(server)
        .get("/")
        .then(res => {
          expect(res.body).toEqual(expected);
        });
    });
  });
});
