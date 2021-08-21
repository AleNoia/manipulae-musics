import React from 'react';
import { FaHome, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Nav } from './styled';
import Search from '../Search';

export default function Header() {
  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="/favorites">
        <FaStar size={24} />
      </Link>
      <Search />
    </Nav>
  );
}
