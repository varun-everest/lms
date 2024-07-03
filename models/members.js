"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.member = void 0;
var sequelize_1 = require("sequelize");
var connection_1 = require("../connection");
var member = connection_1.sequelize.define('member', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: sequelize_1.DataTypes.STRING,
    },
    phone_number: {
        type: sequelize_1.DataTypes.STRING(20),
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
    }
}, {
    tableName: 'members',
    timestamps: false,
});
exports.member = member;
