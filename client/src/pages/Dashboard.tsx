import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

type campgroundType = {
  _id: string;
  title: string;
  location: string;
  description: string;
};

const Dashboard = () => {
  const [campgrounds, setCampgrounds] = useState<campgroundType[]>([]);

  useEffect(() => {
    const getCampgrounds = async () => {
      try {
        const res = await axios.get('/api/campgrounds');
        setCampgrounds(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCampgrounds();
  }, []);

  return (
    <div className="container">
      <div className="flex justify-between items-baseline mt-4">
        <h2 className="text-2xl font-bold">All Campgrounds</h2>
        <Link
          to="/campgrounds/add"
          className="bg-emerald-500 text-white py-3 px-5 rounded mb-4"
        >
          Add New Campground
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-3 my-4">
        {campgrounds &&
          campgrounds.map((campground: campgroundType) => (
            <Link
              to={`/campgrounds/${campground._id}`}
              key={campground._id}
              className="block max-w-sm p-6 border border-gray-200 rounded-md shadow cursor-pointer"
            >
              <h5 className="mb-2">{campground.title}</h5>
              <p className="">{campground.description}</p>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
