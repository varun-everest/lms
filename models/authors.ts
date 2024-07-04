import { sequelize } from "../config/connection";
import { DataTypes } from "sequelize";

const author = sequelize.define(
    'author',
    {
        id: {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        name: {
            type : DataTypes.STRING,  //it takes string(255)
            allowNull : false
        },
        birth_year: {
            type : DataTypes.INTEGER,
            allowNull : false
        },
        nationality: {
            type : DataTypes.STRING(100),
            allowNull : false
        }
    },
    {
        timestamps : false,
        tableName : 'authors'
    }
);

export { author };