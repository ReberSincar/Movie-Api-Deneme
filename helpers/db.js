const mongoose = require('mongoose');


module.exports = () => {
  mongoose.connect('mongodb+srv://movie_user:123456Reber@movie.qdk8o.mongodb.net/Movie?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
  mongoose.connection.on('open', () => {
      console.log('connected');
  });
  mongoose.connection.on('error', (err) => {
    console.log('error', err);
  });

  mongoose.Promise = global.Promise;
};