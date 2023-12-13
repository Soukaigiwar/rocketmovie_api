exports.seed = function (knex, Promise) {
  return knex.raw('PRAGMA foreign_keys = OFF;')
    .then(() => knex("users").del())
    .then(function () {
      return knex("users").insert([
        {
          id: 1,
          name: "admin",
          email: "admin@email.com",
          password:
            "$2a$08$lY9Fj2gCoav7Hj4/CIaa3.Rx63ls3SPpqZwuB5WSWFPsYLcPA518q",
          avatar: "admin-avatar.png",
        },
        {
          id: 2,
          name: "user1",
          email: "user1@email.com",
          password:
            "$2a$08$lY9Fj2gCoav7Hj4/CIaa3.Rx63ls3SPpqZwuB5WSWFPsYLcPA518q",
          avatar: "user1-avatar.jpg",
        },
        {
          id: 3,
          name: "user2",
          email: "user2@email.com",
          password:
            "$2a$08$lY9Fj2gCoav7Hj4/CIaa3.Rx63ls3SPpqZwuB5WSWFPsYLcPA518q",
          avatar: "user2-avatar.jpg",
        },
      ]);
    })
    .finally(() => knex.raw('PRAGMA foreign_keys = ON;'));
};
