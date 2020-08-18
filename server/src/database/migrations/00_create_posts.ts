import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("posts", (table) => {
    table.increments("id").primary();
    table.string("author").notNullable();
    table.string("content").notNullable();
    table.string("image").nullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("posts");
}
