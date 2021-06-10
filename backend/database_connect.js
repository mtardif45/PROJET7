const mysql = require('mysql');
require('dotenv').config();

const bdd = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    dialect: "mysql"

});

bdd.connect(function (err) {
    if (err) {
        return console.error('error: ' + err.message);
    }

    console.log('Connection à la base de donnée réussie !');
});

module.exports = bdd;