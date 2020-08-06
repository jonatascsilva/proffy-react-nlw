import Knex from 'knex';

// Create users table
export async function up(knex: Knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    
    table.string('name').notNullable();
    table.string('avatar').notNullable();
    table.string('whatsapp').notNullable();
    table.string('bio').notNullable();
  });
}

// Are there any problem during execution? Knex, undo actions :)
export async function down(knex: Knex) {
  return knex.schema.dropTable('users');
}
