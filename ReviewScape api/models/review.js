const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true,
    unique: true
  },
  review_comments: {
    type: Array,
    default: []
  },
  upvote_count: {
    type: Number,
    required: true,
    default: 0
  },
  downvote_count: {
    type: Number,
    required: true,
    default: 0
  },
  reviewer_handle: {
    type: String,
    required: true
  }
}, { timestamps: true });

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;