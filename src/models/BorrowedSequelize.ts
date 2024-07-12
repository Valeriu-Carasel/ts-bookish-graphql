import { DataTypes } from 'sequelize';
import { sequelize } from '../ConfigServer';

export const BorrowedSeq = sequelize.define(
    'Borrowed',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        idUser: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Users',
                key: 'id',
            },
        },
        idBook: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Books',
                key: 'id',
            },
        },
        dueDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    },
    { freezeTableName: true },
);
