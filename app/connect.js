const mysql = require('mysql');
const dbconfig = require('./dbconfig');

var connection = mysql.createConnection({
    host: dbconfig.host,
    user: dbconfig.user,
    password: dbconfig.password,
    database: dbconfig.database
});

module.exports = connection;