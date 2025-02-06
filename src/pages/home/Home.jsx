import React from 'react'
import Hero from '../../components/homeComponents/hero/hero/Hero'
import Register from '../register/Register'
import Categories from '../../components/homeComponents/hero/categories/categories'
import CardProductos from '../../components/productos/cardProductos/CardProductos'
import { Row, Container} from'react-bootstrap'

function Home() {
  return (
    <div>
      <Hero />
      <Categories></Categories>
      <Container>
        <h2 className='text-center pb-3'> Productos Destacados </h2>
        <Row>
          <CardProductos></CardProductos>
          <CardProductos></CardProductos>
          <CardProductos></CardProductos>
          <CardProductos></CardProductos>
          <CardProductos></CardProductos>
          <CardProductos></CardProductos>
        </Row>
      </Container>


    </div>
  )
}


export default Home
