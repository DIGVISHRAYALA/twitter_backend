const mongoose = require('mongoose');

const PostLikeSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    postId: {
        type: String,
        required: true
    }
})

const PostLikes = mongoose.model('PostLikes', PostLikeSchema)
module.exports = PostLikes;