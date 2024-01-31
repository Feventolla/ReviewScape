const mongoose = require('mongoose');
const config = require('./config');

const connectToDatabase = () => {
  mongoose.connect(config.dbUri)
    .then(() => {
      console.log('Connected to the database');
    })
    .catch((err) => {
      console.log('Error connecting to the database:', err);
    });
};

module.exports = { connectToDatabase };