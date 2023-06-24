import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  const links = [
    { name: 'Books', path: '/' },
    { name: 'Categories', path: 'categories' },
  ];
  return (
    <>
      <nav className="nav-bar">
        <a className="nav-brand" href="/">
          Bookstore CMS
        </a>
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.name}>
              <NavLink className="nav-link active-link" to={link.path}>
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <button className="icon-button" type="button">
          <span className="material-icons primary-color">person</span>
        </button>
      </nav>
    </>
  );
};

export default Navbar;
