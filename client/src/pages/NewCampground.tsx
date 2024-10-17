import { Link } from 'react-router-dom';

const NewCampground = () => {
  const addHandler = e => {
    e.preventDefault();
  };

  return (
    <div className="m-5">
      <h1 className="text-2xl mb-3 font-bold ">New campground</h1>
      <form className="card mb-5" onSubmit={addHandler}>
        <div className="mb-3">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            className="input"
            placeholder="enter Title..."
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
          />
        </div>
        <button className="btn bg-emerald-700">Add campground</button>
      </form>
      <Link to="/campgrounds" className="btn bg-blue-500">
        All campgrounds
      </Link>
    </div>
  );
};

export default NewCampground;
