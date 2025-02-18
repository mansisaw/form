import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="/signup">signup</a></li>
        <li><a href="/login">login</a></li>
        <li><a href="/">home</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
