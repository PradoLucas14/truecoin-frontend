import React from 'react'
import './footer.css'
import logo from '../../../assets/Logo.png'
import "bootstrap-icons/font/bootstrap-icons.css";
import { Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const Footer = () => {
  return (
    <div className='bgFooter text-center'>
      <NavLink to={'/'}>
      <img src={logo} alt="" width={250} className='imgLogo' />
      </NavLink>
      <div className='d-md-flex d-lg-flex gap-3 justify-content-center pb-4'>
        <NavLink className='text-white linksFooter' to={"/"}><p >Home</p></NavLink>
       <NavLink className='text-white linksFooter'> <p >Nosotros</p></NavLink>
        <NavLink className='text-white linksFooter'><p >Productos</p></NavLink>
        <NavLink className='text-white linksFooter'><p >Login</p></NavLink>
      </div>
      <div className='pb-2 d-flex gap-4 justify-content-center'>
        <p className='text-white btnRedondo'><i class="bi bi-instagram"></i></p>
        <p className='text-white btnRedondo'><i class="bi bi-facebook"></i></p>
        <p className='text-white btnRedondo'><i class="bi bi-twitter"></i></p>
      </div>
    </div>
  )
}

export default Footer
