import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/">YelpCamp</Link>
      </div>

      <nav>
        <ul>
          <li>
            <Link to="/campgrounds">Campgrounds</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
