const knex = require('knex');

const db = knex({
    client: 'postgresql',
    connection: process.env.POSTGRES_URL,
    searchPath: 'public',
});

module.exports = db;