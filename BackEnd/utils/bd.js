
const knex= require('knex')({
  client:'mysql',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DB,
    pool: { min:1, max:10 }
  }
});

knex.on( 'query', function( queryData ) {
  console.log( queryData );
});

module.exports = knex;