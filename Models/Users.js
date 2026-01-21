const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true
    },
    followers: {
        type: Number,
        default:0
    },
    following: {
        type: Number,
        default:0
    },
    posts: {
        type: Number,
        default:0
    },
    profilePic: {
        type: String,
        required:true
    },
    createdAtDate: {
        type:Date,
        default: Date.now,
    }
})

const User = mongoose.model('User', userSchema)
module.exports = User