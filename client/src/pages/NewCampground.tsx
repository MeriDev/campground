import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { createCamp } from '../app/features/campgrounds/campSlice';

const NewCampground = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const defaultFormFields = {
    title: '',
    location: '',
    image: '',
    description: '',
    price: 0,
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { title, location, price, image, description } = formFields;

  const handleChange = e => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };
  // };

  const addHandler = e => {
    e.preventDefault();
    const campground = { title, location, price, image, description };
    dispatch(createCamp(campground));
    navigate('/campgrounds');
  };

  return (
    <div className="container m-5">
      <h1 className="text-emerald-600 text-2xl font-bold mb-5">
        New campground
      </h1>
      <form className="card mb-5 " onSubmit={addHandler}>
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
        <button className="btn bg-emerald-700">Add campground</button>
      </form>
    </div>
  );
};

export default NewCampground;
