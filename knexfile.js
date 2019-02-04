// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./backend/data/users.db3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./backend/data/migrations"
    },
    seeds: {
      directory: "./backend/data/seeds"
    }
  },
  test: {
    client: "sqlite3",
    connection: "./backend/data/users-test.db3"
  },
  production: {
    client: "sqlite3",
    connection: {
      filename: "./backend/data/users.db3"
    }
  }
};
