const mongoose = require('mongoose');

const schema = mongoose.Schema;

const CampgroundSchema = schema({
  title: String,
  price: String,
  description: String,
  location: String,
});

module.exports = mongoose.model('Campground', CampgroundSchema);
