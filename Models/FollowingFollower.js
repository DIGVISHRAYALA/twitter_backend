const mongoose = require('mongoose');

const FollowSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    following: {
        type: String,
        required: true
    }
})

const Follow = mongoose.model('Follow', FollowSchema)
module.exports = Follow;