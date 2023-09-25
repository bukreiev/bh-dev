import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li>
          <Link className="nav__link" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="nav__link" to="/resume">
            Resume
          </Link>
        </li>
        <li>
          <Link className="nav__link" to="">
            Portfolio
          </Link>
        </li>
        <li>
          <Link className="nav__link" to="">
            Blog
          </Link>
        </li>
        <li>
          <Link className="nav__link" to="">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
