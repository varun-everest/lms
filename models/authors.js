"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.author = void 0;
var connection_1 = require("../connection");
var sequelize_1 = require("sequelize");
var author = connection_1.sequelize.define('author', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING, //it takes string(255)
        allowNull: false
    },
    birth_year: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    nationality: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'authors'
});
exports.author = author;
