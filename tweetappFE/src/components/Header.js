import React from 'react';
import { Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand className="mx-auto fs-4">Twitter App</Navbar.Brand>
    </Navbar>
  );
};

export default Header;
