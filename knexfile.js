// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./backend/data/users.db3"
    },
    useNullAsDefault: true,
    pool: {
      afterCreate: (conn, cb) => conn.run("PRAGMA foreign_keys = ON", cb)
    },
    migrations: {
      directory: "./backend/data/migrations"
    },
    seeds: {
      directory: "./backend/data/seeds"
    }
  },
  test: {
    client: "sqlite3",
    connection: "./backend/data/users-test.db3",
    useNullAsDefault: true,
    pool: {
      afterCreate: (conn, cb) => conn.run("PRAGMA foreign_keys = ON", cb)
    },
    seeds: {
      directory: "./backend/data/seeds"
    },
    migrations: {
      directory: "./backend/data/migrations"
    }
  },
  production: {
    client: "sqlite3",
    connection: {
      filename: "./backend/data/users.db3"
    },
    pool: {
      afterCreate: (conn, cb) => conn.run("PRAGMA foreign_keys = ON", cb)
    }
  }
};
