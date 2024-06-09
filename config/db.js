// Crear pool para la conexion a la base de datos
const Pool = require('pg').Pool;

const db = new Pool({
  user: 'myuser',
  password: 'yourpassword',
  host: 'localhost',
  port: 5432,
  database: 'mydatabase',
});

module.exports = { db };
