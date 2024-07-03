import { DataTypes } from "sequelize";
import { sequelize } from "../connection";

const member = sequelize.define(
    'member',
    {
        id: {
            type : DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        address : {
            type : DataTypes.STRING,
        },
        phone_number: {
            type : DataTypes.STRING(20),
        },
        email: {
            type: DataTypes.STRING,
            unique : true,
        }
    },
    {
        tableName : 'members',
        timestamps: false,
    }
);

export {member};