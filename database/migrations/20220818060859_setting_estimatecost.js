/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('setting_estimatecost', (table) => {
        table.increments();
        table.string('order_no').notNullable();
        table.string('customername').notNullable();
        table.string('drawing_no').notNullable();
        table.date('deadline').notNullable();
        table.decimal('amount').notNullable();
        table.dateTime('estimate_date').notNullable();
        table.integer('profit_rate').notNullable();
        table.decimal('profit_amount').notNullable();
        table.text('remark')
        table.timestamps(true, true);
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('setting_estimatecost')
};
