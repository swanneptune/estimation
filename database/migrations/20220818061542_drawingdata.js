/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('drawingdata', (table) => {
        table.increments();
        table.string('order_no').notNullable();
        table.integer('estimate_id').notNullable();
        table.decimal('whole_width').notNullable();
        table.decimal('whole_height').notNullable();
        table.decimal('left_width').notNullable();
        table.decimal('left_height').notNullable();
        table.decimal('right_width').notNullable();
        table.decimal('right_height').notNullable();
        table.decimal('front_width').notNullable();
        table.decimal('front_height').notNullable();
        table.decimal('cut_left').notNullable();
        table.decimal('cut_right').notNullable();
        table.timestamps(true, true);
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('drawingdata')
};
