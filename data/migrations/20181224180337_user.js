
exports.up = function(knex, Promise) {
    return knex.schema.createTable('user', (table) => {
        table.uuid('uid').unique().primary();
        table.string('firstname', 255).notNullable();
        table.string('lastname', 255).notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('user');
};
