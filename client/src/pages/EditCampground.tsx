import { Link } from 'react-router-dom';

const EditCampground = () => {
  const editHandler = e => {
    e.preventDefault();
  };

  return (
    <div className="m-5">
      <h1 className="text-2xl mb-2">Edit campground</h1>
      <form className="card mb-3" onSubmit={editHandler}>
        <div className="mb-1">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" className="input" />
        </div>
        <div className="mb-2">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            className="border-gray-400 border rounded-md block py-1 px-2 text-sm"
          />
        </div>
        <button className="btn bg-orange-500">Update campground</button>
      </form>
      <Link to="/campgrounds/campground._id" className="btn bg-blue-600">
        Back To Campground
      </Link>
    </div>
  );
};

export default EditCampground;
