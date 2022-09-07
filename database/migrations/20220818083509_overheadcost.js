/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('overheadcost', (table) => {
        table.increments();
        table.integer('estimate_id').notNullable();
        table.integer('item_type').notNullable();
        table.decimal('quantity').notNullable();
        table.integer('unit_of_measure').notNullable();
        table.decimal('worker_cost').notNullable();
        table.decimal('worker_amount').notNullable();
        table.text('remark')
        table.timestamps(true, true);
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('overheadcost')
};
