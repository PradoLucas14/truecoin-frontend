import React from 'react'
import ItemProducto from'../../components/productos/itemProducto/ItemProducto'
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'
import TablaProductos from'../../components/productos/tablaProductos/TablaProductos'

const Administrador = () => {
  return (
    <div className=''>
      <TablaProductos></TablaProductos>
    </div>
  )
}

export default Administrador
