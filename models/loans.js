"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loan = void 0;
var sequelize_1 = require("sequelize");
var connection_1 = require("../connection");
var authors_1 = require("./authors");
var members_1 = require("./members");
var loan = connection_1.sequelize.define('loan', {
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
    loan_date: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    due_data: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName: 'loans',
    timestamps: false,
});
exports.loan = loan;
