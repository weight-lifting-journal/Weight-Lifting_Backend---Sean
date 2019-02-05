const bcrypt = require("bcryptjs");

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          username: "john doe",
          email: "johndoe@email.com",
          password: bcrypt.hashSync("pass", 12)
        },
        {
          username: "jane doe",
          email: "janedoe@email.com",
          password: bcrypt.hashSync("pass", 12)
        },
        {
          username: "jan simmons",
          email: "jansimmons@email.com",
          password: bcrypt.hashSync("pass", 12)
        },
        {
          username: "john donkey",
          email: "johndonkey@email.com",
          password: bcrypt.hashSync("pass", 12)
        },
        {
          username: "jane donkey",
          email: "janedonkey@email.com",
          password: bcrypt.hashSync("pass", 12)
        },
        {
          username: "jason simmons",
          email: "jasonsimmons@email.com",
          password: bcrypt.hashSync("pass", 12)
        }
      ]);
    });
};
