const express = require("express");
const configMiddleware = require("../middleware/configMiddleware");
const errorHandlers = require("../middleware/errorHandlers");

const userRouter = require("../userAuthRoutes/userAuthRouter");
const journalRouter = require("../journalRoutes/journalRouter");
const exerciseRouter = require("../exerciseRoutes/exerciseRouter");

const server = express();

configMiddleware(server);

// sanity check
server.get("/", (req, res) => {
  res.json({ message: "👋🌎🌍🌏, root dir sanity check" });
});

server.use("/users", userRouter);
server.use("/workouts", journalRouter);
server.use("/workouts", exerciseRouter);
server.use(errorHandlers.notFound);
server.use(errorHandlers.errorHandler);

module.exports = server;
