const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  database: 'saboroso',
  password: 'Onepiece3040'
});

module.exports = connection;