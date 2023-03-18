const mysql = require('mysql');
const connectDb = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'users_test'
});

module.exports = connectDb;