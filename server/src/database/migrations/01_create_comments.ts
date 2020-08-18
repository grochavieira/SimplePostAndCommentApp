import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("comments", (table) => {
    table.increments("id").primary();
    table.integer("post_id").notNullable().references("id").inTable("posts");
    table.string("username").notNullable();
    table.string("content").notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("comments");
}
