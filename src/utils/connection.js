const { Sequelize } = require('sequelize');
require('dotenv').config();

const dbConnection = new Sequelize({
    database: process.env.DB_NAME,
    port: process.env.PORT,
    username: process.env.USER_NAME,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    dialect: "postgres"
})


module.exports = dbConnection;