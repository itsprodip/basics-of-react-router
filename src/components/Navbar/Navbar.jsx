import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    return (
      <div>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/mobiles">Mobiles</NavLink>
          <NavLink to="/laptops">Laptops</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/users">Users</NavLink>
        </nav>
      </div>
    );
};

export default Navbar;