import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/" className="text-2xl">
          YelpCamp
        </Link>
      </div>

      <nav>
        <ul>
          <li>
            <Link
              className="hover:bg-white/40 hover:border hover:border-white p-2 rounded-md transition"
              to="/campgrounds"
            >
              Campgrounds
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
