const mongoose = require('mongoose');

const PostTweetSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    postId: {
        type: String,
        required: true
    },
    tweet: {
        type: String,
        required: true
    }
})

const PostTweets = mongoose.model('PostTweets', PostTweetSchema)
module.exports = PostTweets;