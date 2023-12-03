import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const location = useLocation();
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li>
          <Link
            className={
              location.pathname === '/about' ? ' nav__link current' : ''
            }
            to="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className={
              location.pathname === '/resume' ? ' nav__link current' : ''
            }
            to="/resume"
          >
            Resume
          </Link>
        </li>
        <li>
          <Link
            className={
              location.pathname === '/portfolio' ? ' nav__link current' : ''
            }
            to="/portfolio"
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            className={
              location.pathname === '/contact' ? ' nav__link current' : ''
            }
            to="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
