// const mongoose = require('mongoose');

// const FollowSchema = new mongoose.Schema({
//     username: {
//         type: String,
//         required: true
//     },
//     following: {
//         type: String,
//         required: true
//     }
// })

// const Follow = mongoose.model('Follow', FollowSchema)

// module.exports = Follow;





const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Follow = sequelize.define('Follow', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    username: {
        type: DataTypes.STRING,
        allowNull: false
    },

    following: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'follows',
    timestamps: true
});

module.exports = Follow;
