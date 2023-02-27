const { DataTypes } = require('sequelize');
const dbConnection = require('../utils/connection');

const TodoModel = dbConnection.define('to_do',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
})


module.exports = TodoModel;