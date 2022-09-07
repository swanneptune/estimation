/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('setting_processing', (table) => {
      table.increments();
      table.string('name').notNullable();
      table.decimal('machine_cost').notNullable();
      table.string('machine_unit').defaultTo(0).notNullable();
      table.decimal('worker_cost').notNullable();
      table.string('worker_unit').notNullable();
      table.timestamps(true, true);
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTable('setting_processing');
  };