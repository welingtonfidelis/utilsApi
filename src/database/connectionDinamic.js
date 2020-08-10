const knex = require('knex');

module.exports = {
    conn(schema) {
        const db = knex({
            client: 'postgresql',
            connection: process.env.POSTGRES_URL,
            searchPath: schema,
        });

        return db;
    }
}