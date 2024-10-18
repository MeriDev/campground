import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/" className="text-2xl">
          YelpCamp
        </Link>
      </div>

      <nav className="flex-1">
        <ul className="flex ml-3">
          <li>
            <Link
              className="hover:bg-white/40 hover:border hover:border-white p-2 rounded-md transition"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="hover:bg-white/40 hover:border hover:border-white p-2 rounded-md transition"
              to="/campgrounds"
            >
              Campgrounds
            </Link>
          </li>
          <li className="ml-auto">
            <Link
              className="hover:bg-white/40 hover:border hover:border-white p-2 rounded-md transition"
              to="/campgrounds/add"
            >
              New Campground
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
