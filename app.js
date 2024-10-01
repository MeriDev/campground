const express = require('express');
const path = require('path');
const dotenv = require('dotenv').config();
const colors = require('colors');
const mongoose = require('mongoose');

const Campground = require('./models/campground');

const app = express();
const port = process.env.PORT || 5000;

// mongoose.connect('mongodb://localhost:27017/yelp-camp', {
//   useNewUrlParser: 'true',
//   useUnifiedTopology: 'true',
// });

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);

    console.log(`MongoDB connected ${conn.connection.host}`.cyan.underline);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('home');
});
app.get('/makecampground', async (req, res) => {
  const camp = Campground({ title: 'My backyard', price: 'free' });
  await camp.save();
  res.send(camp);
});

app.listen(port, () => {
  console.log(`Serving on port ${port}`);
});
