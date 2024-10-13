const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const methodOverride = require('method-override');
const connectDB = require('./config/db');
const asyncHandler = require('express-async-handler');

const Campground = require('./models/campground');

const port = process.env.PORT || 5000;

connectDB();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

// @desc get campgrounds
// @eoute GET /campgrounds
// @access Private
app.get(
  '/api/campgrounds',
  asyncHandler(async (req, res) => {
    const campgrounds = await Campground.find({});
    console.log(campgrounds);

    res.status(200).json(campgrounds);
  })
);

app.get('/campgrounds/new', (req, res) => {
  // res.render('campgrounds/new');
});

app.post('/campgrounds', async (req, res) => {
  const campground = await Campground(req.body.campground);
  await campground.save();
  // res.redirect(`/campgrounds/${campground._id}`);
});

app.get('/campgrounds/:id', async (req, res) => {
  const campground = await Campground.findById(req.params.id);
  // res.render('campgrounds/show', { campground });
});

app.get('/campgrounds/:id/edit', async (req, res) => {
  const campground = await Campground.findById(req.params.id);
  // res.render('campgrounds/edit', { campground });
});

app.put('/campgrounds/:id/', async (req, res) => {
  const { id } = req.params;
  const campground = await Campground.findByIdAndUpdate(id, {
    ...req.body.campground,
  });
  // res.redirect(`/campgrounds/${campground._id}`);
});

app.delete('/campgrounds/:id', async (req, res) => {
  const { id } = req.params;
  await Campground.findByIdAndDelete(id);
  // res.redirect(`/campgrounds`);
});

app.listen(port, () => {
  console.log(`Serving running on port ${port}`.cyan);
});
