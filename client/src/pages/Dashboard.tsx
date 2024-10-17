import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { getCamps } from '../app/features/campgrounds/campSlice';

type campgroundType = {
  _id: string;
  title: string;
  location: string;
};

const Dashboard = () => {
  const dispatch = useDispatch();

  const { campgrounds } = useSelector(state => state.campgrounds);

  useEffect(() => {
    dispatch(getCamps());
  }, [dispatch]);

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
          campgrounds.map(campground => (
            <Link
              to={`/campgrounds/${campground._id}`}
              key={campground._id}
              className="card"
            >
              <h5 className="mb-2">{campground.title}</h5>
              <p className="mb-2">{campground.description}</p>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
