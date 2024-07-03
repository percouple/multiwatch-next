/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("clocks").del();
  await knex("users").insert([
    { id: 1, userId: "user1", username: "bob", password: "pass1" },
    { id: 2, userId: "user2", username: "terry", password: "pass2" },
    { id: 3, userId: "user3", username: "stebe", password: "pass3" },
  ]);
  await knex("clocks").insert([
    {
      id: 1,
      userId: "user1",
      name: "fun stuff timr",
      clockId: 'jfjfjf',
      lastSessionTime: 10,
      todaySessionTime: 484,
      thisWeekTime: 42424,
      allTime: 9999999,
    },
    {
      id: 2,
      userId: "user1",
      name: "Other things timer",
      clockId: 'lkjsdf',
      lastSessionTime: 10,
      todaySessionTime: 484,
      thisWeekTime: 42424,
      allTime: 999999999,
    },
    {
      id: 3,
      userId: "user1",
      name: "buncha stuff",
      clockId: 'lkjsdffd',
      lastSessionTime: 10,
      todaySessionTime: 484,
      thisWeekTime: 42424,
      allTime: 9999999,
    },    
    {
      id: 4,
      userId: "user2",
      name: "Fans of time",
      clockId: 'lkjsdffsdfs',
      lastSessionTime: 10,
      todaySessionTime: 484,
      thisWeekTime: 42424,
      allTime: 9999999,
    },
  ]);
};
