import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../../../assets/Logo.png'
import moneda from'../../../assets/Moneda.png'
import './menu.css'
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <>
     <Navbar expand="lg" className="p-0 m-0">
      <Container fluid>
        <Navbar.Brand>
          <NavLink to={"/"}>
            <img src={Logo} alt="" width={130} />
          </NavLink>
          
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to={"/"} className='text-dark fw-bold linksMenu'>Home</NavLink>
            <NavLink  className='text-dark fw-bold linksMenu'>Nosotros</NavLink>
            <NavLink  className='text-dark fw-bold linksMenu'>Productos</NavLink>
            <NavLink to={"/Login"} className='text-dark fw-bold linksMenu'>Login</NavLink>
            <NavLink to={'/Usario'}>
             <img src={moneda} alt="" width={50} />
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
    </>
  )
}

export default Menu
