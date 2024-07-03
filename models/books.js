"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.book = void 0;
var sequelize_1 = require("sequelize");
var connection_1 = require("../connection");
var authors_1 = require("./authors");
var book = connection_1.sequelize.define('book', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tite: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    authorId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: authors_1.author,
            key: 'id'
        }
    },
    genre: {
        type: sequelize_1.DataTypes.STRING(100),
    },
    isbn: {
        type: sequelize_1.DataTypes.STRING(13),
        unique: true
    },
    publication_year: {
        type: sequelize_1.DataTypes.INTEGER,
    }
}, {
    tableName: 'books',
    timestamps: false
});
exports.book = book;
