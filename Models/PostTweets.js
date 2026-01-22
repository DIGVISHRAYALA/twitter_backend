
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const PostTweets = sequelize.define('PostTweets', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    username: {
        type: DataTypes.STRING,
        allowNull: false
    },

    postId: {
        type: DataTypes.INTEGER,   // FK → posts.id
        allowNull: false
    },

    tweet: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    tableName: 'post_tweets',
    timestamps: true
});

module.exports = PostTweets;
