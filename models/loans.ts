import { DataTypes } from "sequelize";
import { sequelize } from "../connection";
import { author } from "./authors";
import { member } from "./members";

const loan = sequelize.define(
    'loan',
    {
        id : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement : true,
        },
        book_id: {
            type: DataTypes.INTEGER,
            references: {
                model: author,
                key: 'id',
            }
        },
        member_id: {
            type: DataTypes.INTEGER,
            references: {
                model: member,
                key : 'id',
            }
        },
        loan_date: {
            type: DataTypes.DATE,
            allowNull : false,
        },
        due_data: {
            type: DataTypes.DATE,
            allowNull: false
        }
    },
    {
        tableName : 'loans',
        timestamps: false,
    }
);

export {loan};