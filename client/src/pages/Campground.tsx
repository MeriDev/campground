import { Link, useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCamp, deleteCamp } from '../app/features/campgrounds/campSlice';

type campgroundType = {
  _id: string;
  title: string;
  location: string;
};

const Campground = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { campground } = useSelector(state => state.campgrounds);

  useEffect(() => {
    dispatch(getCamp(id));
  }, [dispatch]);

  const deleteCampHandler = async () => {
    confirm('Are you sure?');
    dispatch(deleteCamp(id));
    navigate('/Campgrounds');
  };

  return (
    <div className="container">
      <div className="card my-8 mx-auto">
        <div className="h-[300px] overflow-hidden mb-4">
          <img
            src={campground.image}
            alt="campground image"
            className="block w-full h-full object-cover rounded-t-md"
          />
        </div>
        <div className="px-5 pb-5">
          <h1 className="font-bold text-2xl mb-2">{campground.title}</h1>
          <h2 className="mb-4">{campground.location}</h2>
          <h2 className="mb-4 font-bold text-xl">
            {campground.price && campground.price.toFixed(2)}$
          </h2>
          <p className="mb-4 ">{campground.description}</p>

          <div className="flex">
            <Link
              to={`/campgrounds/${id}/edit`}
              className="bg-orange-500 mr-4 btn"
            >
              Edit
            </Link>
            <div className="bg-red-500 btn ">
              <button onClick={deleteCampHandler}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campground;
