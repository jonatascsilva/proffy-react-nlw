import Knex from 'knex';

// Create connections table
export async function up(knex: Knex) {
  return knex.schema.createTable('connections', (table) => {
    table.increments('id').primary();

    table
      .integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

    table.timestamp('created_at').defaultTo(knex.raw('CURRENT_TIMESTAMP')).notNullable();
  });
}

// Are there any problem during execution? Knex, undo actions :)
export async function down(knex: Knex) {
  return knex.schema.dropTable('connections');
}
