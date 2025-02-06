import React from 'react'
import { Row, Col, Card, Button, Container } from 'react-bootstrap'
import Moneda from '../../../assets/moneda.png'

const CardProductos = () => {
  return (
       
        <Col xs={6} md={4} lg={3} className="pb-3 h-100">
          <Card >
            <Card.Img 
              variant="top" 
              src="https://images.pexels.com/photos/10202985/pexels-photo-10202985.jpeg?auto=compress&cs=tinysrgb&w=400" 
            />
            <Card.Body>
              <Card.Title>1Kg Pan</Card.Title>
              <Card.Text>
                El producto de nuestra panadería fue realizado en horno de barro.
              </Card.Text>
              <Card.Text>
                <img src={Moneda} alt="Moneda" width={50} className="m-0" /> 6000
              </Card.Text>
              <Button variant="dark">Comprar</Button>
            </Card.Body>
          </Card>
        </Col>
      
  )
}

export default CardProductos
