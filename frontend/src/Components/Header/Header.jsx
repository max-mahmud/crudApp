import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to={'/'}>Navbar</Navbar.Brand>
          <Nav className="ms-auto">
            <NavLink to={'/'}>Home</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
