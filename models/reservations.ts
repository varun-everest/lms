import { DataTypes } from "sequelize";
import { sequelize } from "../config/connection";
import { author } from "./authors";
import { member } from "./members";
import { book } from "./books";

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

book.hasMany(reservation, { foreignKey: 'book_id' });
reservation.belongsTo(book, { foreignKey: 'book_id' });

member.hasMany(reservation, { foreignKey: 'member_id' });
reservation.belongsTo(member, { foreignKey: 'member_id' });

export {reservation};