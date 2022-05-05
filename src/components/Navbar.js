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
      <h1>Bookstore</h1>
      <ul className="links">
        {links.map((link) => (
          <li key={link.id}>
            <NavLink
              to={link.path}
              activeClassName="activeLink"
              className="link"
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
      <Icon icon="bi:person-fill" />
    </nav>
  );
};

export default Navbar;
