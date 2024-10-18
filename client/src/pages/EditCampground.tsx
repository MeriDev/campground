import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { editCamp, getCamp } from '../app/features/campgrounds/campSlice';

const EditCampground = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { campground } = useSelector(state => state.campgrounds);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setItem({ ...item, [name]: value });
  // };

  const [title, setTitle] = useState(campground.title);
  const [location, setLocation] = useState(campground.location);

  useEffect(() => {
    dispatch(getCamp(id));
  }, [dispatch]);

  const editHandler = e => {
    e.preventDefault();
    const newCamp = { title, location };
    dispatch(editCamp({ id, newCamp }));
  };

  return (
    <div className="m-5">
      <h1 className="text-2xl mb-2">Edit campground</h1>
      <form className="card mb-3" onSubmit={editHandler}>
        <div className="mb-1">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            // value={item.name}
            className="input"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={location}
            onChange={e => setLocation(e.target.value)}
            className="border-gray-400 border rounded-md block py-1 px-2 text-sm"
          />
        </div>
        <button className="btn bg-orange-500">Update campground</button>
      </form>
      <Link to={`/campgrounds/${campground._id}`} className="btn bg-blue-600">
        Back To Campground
      </Link>
    </div>
  );
};

export default EditCampground;
