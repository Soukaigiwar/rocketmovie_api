exports.seed = function(knex, Promise) {
  return knex.raw('PRAGMA foreign_keys = OFF;')
  .then(() => knex('movie_tags').del())
  .then(function () {
    return knex('movie_tags').insert([
      {
        id: 1,
        movie_note_id: 1,
        user_id: 1,
        name: 'Sam Esmail'
      },
      {
        id: 2,
        movie_note_id: 1,
        user_id: 1,
        name: 'Julia Roberts'
      },
      {
        id: 3,
        movie_note_id: 1,
        user_id: 1,
        name: 'Mahershala Ali'
      },
      {
        id: 4,
        movie_note_id: 1,
        user_id: 1,
        name: 'Ethan Hawke'
      },
      {
        id: 5,
        movie_note_id: 1,
        user_id: 1,
        name: "Myha'la"
      },
      {
        id: 6,
        movie_note_id: 1,
        user_id: 1,
        name: "Farrah Mackenzie"
      },
      {
        id: 7,
        movie_note_id: 1,
        user_id: 1,
        name: "Charlie Evans"
      },
      {
        id: 8,
        movie_note_id: 1,
        user_id: 1,
        name: "Kevin Bacon"
      },
      {
        id: 9,
        movie_note_id: 2,
        user_id: 1,
        name: "Martin Scorsese"
      },
      {
        id: 10,
        movie_note_id: 2,
        user_id: 1,
        name: "Leonardo DiCaprio"
      },
      {
        id: 11,
        movie_note_id: 2,
        user_id: 1,
        name: "Lily Gladstone"
      },
      {
        id: 12,
        movie_note_id: 2,
        user_id: 1,
        name: "Robert De Niro"
      },
      {
        id: 13,
        movie_note_id: 3,
        user_id: 1,
        name: "Paul King"
      },
      {
        id: 14,
        movie_note_id: 3,
        user_id: 1,
        name: "Keegan-Michael Key"
      },
      {
        id: 15,
        movie_note_id: 3,
        user_id: 1,
        name: "Timothée Chalamet"
      },
      {
        id: 16,
        movie_note_id: 3,
        user_id: 1,
        name: "Calah Lane"
      },
      {
        id: 17,
        movie_note_id: 4,
        user_id: 1,
        name: "Peter Sohn"
      },
      {
        id: 18,
        movie_note_id: 4,
        user_id: 1,
        name: "Leah Lewis"
      },
      {
        id: 19,
        movie_note_id: 4,
        user_id: 1,
        name: "Mamoudou Athie"
      },
      {
        id: 20,
        movie_note_id: 4,
        user_id: 1,
        name: "Ronnie del Carmen"
      },
      {
        id: 21,
        movie_note_id: 4,
        user_id: 1,
        name: "Shila Ommi"
      },
      {
        id: 22,
        movie_note_id: 4,
        user_id: 1,
        name: "Wendi McLendon-Covey"
      },
      {
        id: 23,
        movie_note_id: 5,
        user_id: 1,
        name: "Martin Scorsese"
      },
      {
        id: 24,
        movie_note_id: 5,
        user_id: 1,
        name: "Leonardo DiCaprio"
      },
      {
        id: 25,
        movie_note_id: 5,
        user_id: 1,
        name: "Mark Ruffalo"
      },
      {
        id: 26,
        movie_note_id: 5,
        user_id: 1,
        name: "Ben Kingsley"
      },
      {
        id: 27,
        movie_note_id: 5,
        user_id: 1,
        name: "Max von Sydow"
      },
      {
        id: 28,
        movie_note_id: 6,
        user_id: 1,
        name: "Christopher Nolan"
      },
      {
        id: 29,
        movie_note_id: 6,
        user_id: 1,
        name: "Christian Bale"
      },
      {
        id: 30,
        movie_note_id: 6,
        user_id: 1,
        name: "Heath Ledger"
      },
      {
        id: 31,
        movie_note_id: 6,
        user_id: 1,
        name: "Michael Caine"
      },
      {
        id: 32,
        movie_note_id: 7,
        user_id: 1,
        name: "David Fincher"
      },
      {
        id: 33,
        movie_note_id: 7,
        user_id: 1,
        name: "Edward Norton"
      },
      {
        id: 34,
        movie_note_id: 7,
        user_id: 1,
        name: "Brad Pitt"
      },
      {
        id: 35,
        movie_note_id: 8,
        user_id: 1,
        name: "Hayao Miyazaki"
      },
      {
        id: 36,
        movie_note_id: 8,
        user_id: 1,
        name: "Rumi Hiiragi"
      },
      {
        id: 37,
        movie_note_id: 8,
        user_id: 1,
        name: "Miyu Irino"
      },
      {
        id: 38,
        movie_note_id: 8,
        user_id: 1,
        name: "Mari Natsuki"
      },
      {
        id: 39,
        movie_note_id: 8,
        user_id: 1,
        name: "Takashi Naito"
      },
      {
        id: 40,
        movie_note_id: 8,
        user_id: 1,
        name: "Yasuko Sawaguchi"
      },
    ]);
  })
  .finally(() => knex.raw('PRAGMA foreign_keys = ON;'));
};