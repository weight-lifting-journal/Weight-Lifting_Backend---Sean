const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

module.exports = server => {
  server.use(morgan("dev"));
  server.use(helmet());
  server.use(express.json());
  server.use(cors({ credentials: true, origin: "http://localhost:3000" }));
};
