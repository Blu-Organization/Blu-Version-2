const { Pool } = require('pg');

const pool = new Pool({
  user: 'paulchoi',
  host: 'localhost',
  database: 'bludb',
  port: 5432,
})

module.exports = pool;