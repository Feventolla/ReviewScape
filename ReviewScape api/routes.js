const express = require('express');
const router = express.Router();
const Comment=require('./models/comment')
const User=require('./models/user')
const Review=require('./models/review')

// Route for the homepage
router.post('/', async (req, res) => {
  try {
    const resp = await User.findOne(req.body);
    if (resp === null) {
      console.log("No success folks");
      console.log(resp);
      res.sendStatus(404);
    } else {
      console.log("Success again folks");
      console.log(resp);
      res.sendStatus(200);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.post('/register', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    console.log("We have done it guys");
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
});

router.post('/reviews', async (req, res) => {
  try {
    const review = new Review(req.body);
    await review.save();
    const reviews = await Review.find();
    console.log(reviews);
    res.status(200).json(reviews);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
});

router.get('/reviews', async (req, res) => {
  try {
    const reviews = await Review.find();
    console.log("I have been called");
    res.status(200).json(reviews);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
});

router.post('/comments', async (req, res) => {
  try {
    const comment = new Comment(req.body);
    await comment.save();
    const comments = await Comment.find();
    console.log(comments);
    res.status(200).json(comments);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
});

router.get('/comments', async (req, res) => {
  try {
    const comments = await Comment.find();
    console.log(comments);
    res.status(200).json(comments);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
});

module.exports = router;