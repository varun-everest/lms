import { DataTypes } from "sequelize";
import { sequelize } from "../config/connection";
import { author } from './authors'

const book = sequelize.define(
    'book',
    {
        id: {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        tite: {
            type: DataTypes.STRING,
            allowNull : false,
        },
        authorId: {
            type: DataTypes.INTEGER,
            references :{
                model : author,
                key : 'id'
            }
        },
        genre: {
            type: DataTypes.STRING(100),
        },
        isbn: {
            type: DataTypes.STRING(13),
            unique: true
        },
        publication_year: {
            type: DataTypes.INTEGER,
        }
    },
    {
        tableName : 'books',
        timestamps: false,
        indexes: [
            {
                fields: ['authorId']
            }
        ]
    }
);

author.hasMany(book, { foreignKey: 'authorId' });
book.belongsTo(author, { foreignKey: 'authorId' });

export {book};
