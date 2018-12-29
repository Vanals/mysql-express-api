'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'mydb'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log('connected...to the database')
});

module.exports = connection;
