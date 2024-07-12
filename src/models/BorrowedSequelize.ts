import { DataTypes } from 'sequelize';
import { sequelize } from '../ConfigServer';
import { UsersSeq } from './UsersSequelize';
import { BooksSeq } from './BooksSequelize';

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
                model: UsersSeq,
                key: 'id',
            },
        },
        idBook: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: BooksSeq,
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

BorrowedSeq.belongsTo(BooksSeq, {
    foreignKey: 'idBook',
});
