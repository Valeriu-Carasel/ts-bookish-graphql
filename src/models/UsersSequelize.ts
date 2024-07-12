import { DataTypes } from 'sequelize';
import { sequelize } from '../ConfigServer';

export const UsersSeq = sequelize.define('Users', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    passUser: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    token: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});
