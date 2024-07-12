import { Sequelize, DataTypes } from 'sequelize';

export const sequelize = new Sequelize('bookish', 'Borsec', 'Borsec', {
    host: '127.0.0.1',
    dialect: 'mssql',
});

export const BooksSeq = sequelize.define('Books', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ISBN: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    copies: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});
