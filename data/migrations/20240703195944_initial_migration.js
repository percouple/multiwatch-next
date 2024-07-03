/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema
      .createTable("users", (tbl) => {
          tbl.increments('id');
          tbl.string('userId').notNullable().unique();
          tbl.string('username').notNullable().unique();
          tbl.string('password').notNullable()
      })
      .createTable("clocks", (tbl) => {
          tbl.increments('id').notNullable();
          tbl.string('userId').notNullable();
          tbl.string('clockId').notNullable();
          tbl.string('name').notNullable();
          tbl.integer('lastSessionTime');
          tbl.integer('todaySessionTime');
          tbl.integer('thisWeekTime');
          tbl.integer('allTime');
      });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists("users").dropTableIfExists("clocks");
  };
  