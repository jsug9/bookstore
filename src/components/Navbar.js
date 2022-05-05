import React from 'react';
import { Icon } from '@iconify/react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Books',
    },
    {
      id: 2,
      path: '/categories',
      text: 'Categories',
    },
  ];

  return (
    <nav className="navbar">
      <div className="rightNav">
        <h1>Bookstore CMS</h1>
        <ul className="links">
          {links.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.path}
                className="link"
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="oval">
        <Icon className="icon" icon="bi:person-fill" />
      </div>
    </nav>
  );
};

export default Navbar;
