
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {username: "john doe", email: 'johndoe@email.com', password="hashedString"},
        {username: "jane doe", email: 'janedoe@email.com', password="hashedString"},
        {username: "jan simmons", email: 'jansimmons@email.com', password="hashedString"}
      ]);
    });
};
