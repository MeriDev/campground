import { Link } from 'react-router-dom';

const EditCampground = () => {
  return (
    <div>
      <h1>Edit campground</h1>
      <form action="/campgrounds/<%=campground._id%>?_method=PUT" method="POST">
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="campground[title]"
            value="campground.title"
          />
        </div>
        <div>
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="campground[location]"
            value="campground.location"
          />
        </div>
        <button>Update campground</button>
      </form>
      <Link to="/campgrounds/campground._id">Back To Campground</Link>
    </div>
  );
};

export default EditCampground;
