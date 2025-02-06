import React from 'react'
import Hero from '../../components/homeComponents/hero/hero/Hero'
import Register from '../register/Register'
import Categories from '../../components/homeComponents/hero/categories/categories'
import CardProductos from '../../components/productos/cardProductos/CardProductos'
import { Row } from 'react-bootstrap'

function Home() {
  return (
    <div>
      <Hero/>
      <Categories></Categories>
      <CardProductos></CardProductos>
      
    </div>
  )
}

export default Home
