const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    postContent: {
        type: String,
        required: true
    },
    profilepic: {
        type: String,
        required: true
    },
    postImage: {
        type: String,
    },
    totalLikes: {
        type: Number,
        default: 0
    },
    totalTweets: {
        type: Number,
        default: 0
    },
    createdAtDate: {
        type:Date,
        default: Date.now,
    }
})

const Post = mongoose.model('Post', PostSchema)
module.exports = Post