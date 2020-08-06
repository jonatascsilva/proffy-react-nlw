import Knex from 'knex';

// Create classes table
export async function up(knex: Knex) {
  return knex.schema.createTable('classes', (table) => {
    table.increments('id').primary();
    
    table.string('subject').notNullable();
    table.decimal('cost').notNullable();

    table
      .integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
}

// Are there any problem during execution? Knex, undo actions :)
export async function down(knex: Knex) {
  return knex.schema.dropTable('classes');
}
