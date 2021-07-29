const mysql = require('mysql');
const util = require('util');

/*
COMO HACER LAS CONSULTAS A LAS BASES DE DATOS:

CONSULTAS EN CRUDO: Hacer una por una las consultas.
QUERY BUILDER: Knexjs db para proyectos mas grandes.
ORM: para proyectos gigantes
*/

//Un Pool es una COLA de conexiones para realizar muchas consultas a la DB.


let pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,


  //connectionLimit es una configuración para colar las consultas en caso que haya muchas a la vez.
  connectionLimit: 10,
});

pool.query = util.promisify(pool.query);

module.exports = pool;