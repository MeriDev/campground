import { Link, useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCamp } from '../app/features/campgrounds/campSlice';

type campgroundType = {
  _id: string;
  title: string;
  location: string;
};

const Campground = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(id);

  const { campground } = useSelector(state => state.campgrounds);

  useEffect(() => {
    dispatch(getCamp(id));
  }, [dispatch]);

  const deleteCampHandler = async () => {
    navigate('/Campgrounds');
  };

  return (
    <div className="card my-8 mx-auto">
      <h1 className="font-bold text-2xl mb-2">{campground.title}</h1>
      <h2 className="mb-4">{campground.location}</h2>

      <div className="flex">
        <Link to={`/campgrounds/${id}/edit`} className="bg-orange-500 mr-4 btn">
          Edit
        </Link>
        <div className="bg-red-500  btn ">
          <button onClick={deleteCampHandler}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Campground;
