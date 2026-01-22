

const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const PostLikes = sequelize.define('PostLikes', {
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
        type: DataTypes.INTEGER,   // FK to posts.id
        allowNull: false
    }
}, {
    tableName: 'post_likes',
    timestamps: false,

    indexes: [
        {
            unique: true,
            fields: ['username', 'postId']
        }
    ]
});

module.exports = PostLikes;
