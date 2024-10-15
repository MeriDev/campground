import { Link, useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

type campgroundType = {
  _id: string;
  title: string;
  location: string;
  description: string;
};

const Campground = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [campground, setCampground] = useState<campgroundType>();

  useEffect(() => {
    const getCampground = async () => {
      try {
        const res = await axios.get(`/api/campgrounds/${id}`);
        setCampground(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCampground();
  }, [id]);

  const deleteCampHandler = async () => {
    await axios.delete(`/api/campgrounds/${id}`);
    navigate('/Campgrounds');
    console.log('deleted');
  };

  return (
    <div className="block max-w-sm m-4 p-6 border border-gray-200 rounded-md shadow">
      {campground && (
        <div>
          <h1 className="font-bold text-2xl mb-2">{campground.title}</h1>
          <h2 className="mb-4">{campground.location}</h2>

          <div className="flex">
            <Link
              to={`/campgrounds/${id}/edit`}
              className="bg-orange-500 mr-4 btn"
            >
              Edit
            </Link>
            <div className="bg-red-500  btn ">
              <button onClick={deleteCampHandler}>Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Campground;
