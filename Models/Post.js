
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Post = sequelize.define('Post', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    username: {
        type: DataTypes.STRING,
        allowNull: false
    },

    postContent: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    profilepic: {
        type: DataTypes.STRING,
        allowNull: false
    },

    postImage: {
        type: DataTypes.TEXT,
        allowNull: true
    },

    totalLikes: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },

    totalTweets: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },

    createdAtDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'posts',
    timestamps: false
});

module.exports = Post;
