exports.up = function(knex) {  
    return knex.schema.createTable('connections', function(table) {
        table.increments();
        table.string('ip').notNullable();
        table.datetime('date').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('connections');
};