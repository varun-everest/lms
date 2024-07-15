import { DataTypes } from "sequelize";
import { sequelize } from "../config/connection";
import { author } from "./authors";
import { member } from "./members";
import { book } from "./books";

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
        due_date: {
            type: DataTypes.DATE,
            allowNull: false
        }
    },
    {
        tableName : 'loans',
        timestamps: false,
        indexes: [
            {
                fields: ['book_id']
            },
            {
                fields: ['member_id']
            }
        ]
    }
);
book.hasMany(loan, { foreignKey: 'book_id' });
loan.belongsTo(book, { foreignKey: 'book_id' });

member.hasMany(loan, { foreignKey: 'member_id' });
loan.belongsTo(member, { foreignKey: 'member_id' });

export {loan};