import { DataTypes } from "sequelize";
import { sequelize } from "../connection";
import { author } from "./authors";
import { member } from "./members"

const reservation = sequelize.define(
    'reservation',
    {   
        id: {
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
        reservation_date: {
            type: DataTypes.DATE,
            allowNull : false,
        }
    },
    {
        tableName : 'reservations',
        timestamps : false,
    }
);

export {reservation};