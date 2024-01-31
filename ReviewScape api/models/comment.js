const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true,
    unique: true
  }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;