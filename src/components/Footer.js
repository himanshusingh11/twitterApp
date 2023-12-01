import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 text-center">
      <Container>
        <p>&copy; {new Date().getFullYear()} Twitter App. All Rights Reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
