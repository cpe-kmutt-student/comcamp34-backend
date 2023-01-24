const mysql = require('mysql');
const dbconfig = require('./db.config');

var connection = mysql.createConnection({
    host: dbconfig.HOST,
    user: dbconfig.USER,
    password: dbconfig.PASSWORD,
    database: dbconfig.DB
});

module.exports = connection;