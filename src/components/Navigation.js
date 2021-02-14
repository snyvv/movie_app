import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';

function Navigation() {
  return (
    <nav className="navigation">
      <Link to="/" className="navigation__link">Home</Link>
      <Link to="/about" className="navigation__link">About</Link>
    </nav>
  );
}

export default Navigation;