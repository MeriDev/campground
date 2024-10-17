const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const methodOverride = require('method-override');
const connectDB = require('./config/db');
const asyncHandler = require('express-async-handler');
const cors = require('cors');

const Campground = require('./models/campground');

const port = process.env.PORT || 5000;

connectDB();

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

// @desc get campgrounds
// @eoute GET api/campgrounds
// @access Private
app.get(
  '/api/campgrounds',
  asyncHandler(async (req, res) => {
    const campgrounds = await Campground.find({});

    res.status(200).json(campgrounds);
  })
);

// @desc Fetch campground
// @eoute Get /campgrounds/id
// @access Private
app.get('/api/campgrounds/:id', async (req, res) => {
  const campground = await Campground.findById(req.params.id);
  res.status(200).json(campground);
});

// @desc create campground
// @route POST /api/campgrounds
// @access Private
app.post('api/campgrounds', async (req, res) => {
  const campground = await Campground(req.body.campground);
  await campground.save();
  res.status(200).json(campground);
});

// @desc edit campground
// @route  GET /api/campgrounds/:id/edit
// @access Private

app.put('/api/campgrounds/:id/', async (req, res) => {
  const { id } = req.params;
  const campground = await Campground.findByIdAndUpdate(id, {
    ...req.body.campground,
  });
  res.status(200).json(campground);
});

// @desc delete campground
// @route  GET /api/campgrounds/:id
// @access Private
app.delete('/api/campgrounds/:id', async (req, res) => {
  const { id } = req.params;
  await Campground.findByIdAndDelete(id);
  res.status(200).json({ message: 'User and session was deleted' });
});

app.listen(port, () => {
  console.log(`Serving running on port ${port}`.cyan);
});
