import { Link } from 'react-router-dom';

const NewCampground = () => {
  return (
    <div>
      <h1>New campground</h1>
      <form action="/campgrounds" method="POST">
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="campground[title]" />
        </div>
        <div>
          <label htmlFor="location">Location</label>
          <input type="text" id="location" name="campground[location]" />
        </div>
        <button>Add campground</button>
      </form>
      <Link to="/campgrounds">All campgrounds</Link>
    </div>
  );
};

export default NewCampground;
