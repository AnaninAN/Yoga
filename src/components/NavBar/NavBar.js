import './NavBar.css'

import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap'

import { MAIN_ROUTE, PROGRAMM_ROUTE, ABOUT_ROUTE } from '../../utils/consts'

export const NavBar = () => {
  // eslint-disable-next-line
  const [menu, setMenu] = useState([
    { id: '1', to: MAIN_ROUTE, title: 'Главная' },
    { id: '2', to: PROGRAMM_ROUTE, title: 'Моя программа' },
    { id: '3', to: ABOUT_ROUTE, title: 'О себе' },
  ])

  const renderMenu = menu.map(({ id, to, title }) => (
    <Nav.Link key={id}>
      <NavLink to={to} className="navbar__link">
        {title}
      </NavLink>
    </Nav.Link>
  ))

  return (
    <Navbar fixed="top" bg="dark" variant="dark" collapseOnSelect expand="sm">
      <Container>
        <Navbar.Brand className="navbar__brand">Yoga</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">{renderMenu}</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
