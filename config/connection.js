// import the Sequelize constructor from the library
const Sequelize = require('sequelize');

require('dotenve').config();

// create connection to our database, passin your MySQL information for username and password
const sequelize = new Sequelize(procees.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;
