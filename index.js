const server = require("./backend/api/server");

const PORT = process.env.PORT;

server.listen(PORT, () =>
  console.log(`\n=== Server running on port ${PORT} ===\n`)
);
