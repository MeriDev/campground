import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { editCamp, getCamp } from '../app/features/campgrounds/campSlice';

const EditCampground = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const { campground } = useSelector(state => state.campgrounds);

  const defaultFormFields = {
    title: campground.title,
    location: campground.location,
    image: campground.image,
    description: campground.description,
    price: campground.price,
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { title, location, price, image, description } = formFields;

  const handleChange = e => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  useEffect(() => {
    dispatch(getCamp(id));
  }, [dispatch]);

  const editHandler = e => {
    e.preventDefault();
    const newCamp = { title, location, price, image, description };
    dispatch(editCamp({ id, newCamp }));
    navigate('/campgrounds/' + id);
  };

  return (
    <div className="m-5">
      <h1 className="text-emerald-600 text-2xl font-bold mb-5">
        Edit campground
      </h1>
      <form className="card mb-3" onSubmit={editHandler}>
        <div className="mb-3">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            className="input"
            placeholder="enter Title..."
            value={title}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image">Image</label>
          <input
            type="text"
            id="image"
            name="image"
            className="input"
            placeholder="enter Image Url..."
            value={image}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            className="input"
            placeholder="enter Location..."
            value={location}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            className="input"
            placeholder="enter Price..."
            value={price}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price">Description</label>
          <textarea
            id="description"
            name="description"
            className="input "
            placeholder="enter Description..."
            defaultValue={description}
            onChange={handleChange}
          ></textarea>
        </div>
        <button className="btn bg-orange-500">Update campground</button>
      </form>
    </div>
  );
};

export default EditCampground;
