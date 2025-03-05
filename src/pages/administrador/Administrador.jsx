import React from 'react'
import ItemProducto from'../../components/productos/itemProducto/ItemProducto'
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'
import TablaProductos from'../../components/productos/tablaProductos/TablaProductos'
import TablaUsuarios from '../../components/usuarios/tablaUsuario/TablaUsuarios'


const Administrador = () => {
  return (
    <div className=''>
      <TablaUsuarios></TablaUsuarios>
    </div>
  )
}

export default Administrador
