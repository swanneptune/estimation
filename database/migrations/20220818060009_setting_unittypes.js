/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('setting_unittypes', (table) => {
      table.increments();
      table.string('name').notNullable();
      table.string('machine_unit').notNullable();
      table.string('worker_unit').notNullable();
      table.timestamps(true, true);
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTable('setting_unittypes');
  };