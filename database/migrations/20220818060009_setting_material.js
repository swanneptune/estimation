/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('setting_materials', (table) => {
      table.increments();
      table.string('name').notNullable();
      table.decimal('price').notNullable();
      table.integer('quantity_unit').defaultTo(0).notNullable();
      table.timestamps(true, true);
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTable('setting_materials');
  };