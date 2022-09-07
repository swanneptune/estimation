/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('processingcost', (table) => {
        table.increments();
        table.integer('estimate_id').notNullable();
        table.integer('item_type').notNullable();
        table.decimal('worker_qty').notNullable();
        table.integer('worker_unit').notNullable();
        table.decimal('worker_cost').notNullable();
        table.decimal('worker_amount').notNullable();
        table.decimal('machine_qty').notNullable();
        table.integer('machine_unit').notNullable();
        table.decimal('machine_cost').notNullable();
        table.decimal('machine_amount').notNullable();
        table.text('remark')
        table.timestamps(true, true);
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('processingcost')
};
