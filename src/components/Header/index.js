import React from 'react';

import { Navbar, Nav, Container } from 'react-bootstrap';

import { StyeledNavbar, StyledLink } from './styled';
import Search from '../Search';

export default function Header() {
  return (
    <StyeledNavbar variant="dark" expand="lg" fixed="top">
      <Container>
        <StyledLink to="/">
          <Navbar.Brand>Manipulaê Music</Navbar.Brand>
        </StyledLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto" style={{ maxHeight: '100px' }} navbarScroll>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/favorites">Favoritos</StyledLink>
          </Nav>
          <Nav>
            <Search />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyeledNavbar>
  );
}
