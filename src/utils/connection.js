const { Sequelize } = require('sequelize');

const dbConnection = new Sequelize({
    database: process.env.dbName,
    port: process.env.port,
    username: process.env.userName,
    password: process.env.password,
    host: process.env.host,
    dialect: "postgres"
})


module.exports = dbConnection;