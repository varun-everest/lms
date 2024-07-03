"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reservation = void 0;
var sequelize_1 = require("sequelize");
var connection_1 = require("../connection");
var authors_1 = require("./authors");
var members_1 = require("./members");
var reservation = connection_1.sequelize.define('reservation', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    book_id: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: authors_1.author,
            key: 'id',
        }
    },
    member_id: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: members_1.member,
            key: 'id',
        }
    },
    reservation_date: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    }
}, {
    tableName: 'reservations',
    timestamps: false,
});
exports.reservation = reservation;
