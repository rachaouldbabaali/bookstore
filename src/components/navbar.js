import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    { name: 'Books', path: '/' },
    { name: 'Categories', path: 'categories' },
  ];
  return (
    <nav className="navbar">
      <h1>Bookstore CMS</h1>
      <ul className="nav-links">
        {links.map((link) => (
          <li key={link.name}><NavLink to={link.path}>{link.name}</NavLink></li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
