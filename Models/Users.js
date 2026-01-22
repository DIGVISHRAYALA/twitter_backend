

const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false
    },

    followers: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },

    following: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },

    posts: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },

    profilePic: {
        type: DataTypes.TEXT,
        defaultValue: ''   // ✅ SAME FIX AS YOUR MONGO VERSION
    },

    createdAtDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'users',
    timestamps: false,     // because you use createdAtDate manually

    indexes: [
        { unique: true, fields: ['username'] },
        { unique: true, fields: ['email'] }
    ]
});

module.exports = User;
