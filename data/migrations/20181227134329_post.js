
exports.up = function(knex, Promise) {
    return knex.schema.createTable('post', (table) => {
        table.uuid('uid').unique().primary();
        table.string('title', 255).notNullable();
        table.uuid('author').notNullable();
        table.foreign('author').references('uid').inTable('user');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('post');
};
