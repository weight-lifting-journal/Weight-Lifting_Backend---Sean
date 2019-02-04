const express = require("express");
const configMiddleware = require("../middleware/configMiddleware");
const errorHandlers = require("../middleware/errorHandlers");

const userRouter = require("../usersRoutes/users");
const workoutRouter = require("../workoutRoutes/workouts");

const server = express();

configMiddleware(server);

// sanity check
server.get("/", (req, res) => {
  res.send("👋🌎🌍🌏, root dir sanity check");
});

server.use("/users", userRouter);
server.use("/workouts");
server.use(errorHandlers.notFound);
server.use(errorHandlers.errHandler);

module.exports = server;
