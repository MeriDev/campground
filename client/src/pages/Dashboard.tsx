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
      <h2 className="text-neutral-500 text-2xl font-bold mt-5">
        All Campgrounds
      </h2>

      <div className="grid md:grid-cols-3 gap-3 my-4 grid-cols-1">
        {campgrounds &&
          campgrounds.map(campground => (
            <Link
              to={`/campgrounds/${campground._id}`}
              key={campground._id}
              className="card"
            >
              <div className="h-[300px] overflow-hidden mb-3 flex">
                {campground.image && (
                  <img
                    src={campground.image}
                    alt="campground image"
                    className="block w-full h-full object-cover rounded-t-md"
                  />
                )}
              </div>
              <div className="px-5 pb-5">
                <h5 className="font-bold text-lg mb-2">{campground.title}</h5>
                <p className="mb-2">{campground.location}</p>
                <p className="text-xl font-bold">
                  {campground.price && campground.price.toFixed(2)}$
                </p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
