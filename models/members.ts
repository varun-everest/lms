import { DataTypes } from "sequelize";
import { sequelize } from "../config/connection";

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
        indexes: [
            {
                fields: ['email']
            }
        ]
    }
);

export {member};