/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('setting_overheads', (table) => {
        table.increments();
        table.string('name').notNullable();
        table.decimal('cost').notNullable();
        table.string('unit').notNullable();
        table.timestamps(true, true);
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('setting_overheads');
};
