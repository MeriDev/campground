import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const nav = document.querySelector('header');
  console.log(location.pathname);
  if (location.pathname === '/') {
    nav?.classList.add('bg-transparent');
    nav?.classList.remove('bg-primary-color');
  } else {
    nav?.classList.add('bg-primary-color');
    nav?.classList.remove('bg-transparent');
  }

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
