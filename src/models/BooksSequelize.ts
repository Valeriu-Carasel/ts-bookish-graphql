import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from '../ConfigServer';
import {BorrowedSeq} from "./BorrowedSequelize";

export const BooksSeq = sequelize.define('Books', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
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

//BooksSeq.hasMany(BorrowedSeq, {foreignKey: ''})