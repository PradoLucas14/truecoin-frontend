import React from 'react'
import ItemProducto from'../../components/productos/itemProducto/ItemProducto'
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'



const Administrador = () => {
  return (
    <div>
      <section className="container mainSection ">
        <div className="d-flex justify-content-between align-items-center mt-5 py-3">
          <h1 className="display-5 text-white">Gestionar Clases</h1>
          
            <i className="bi bi-file-earmark-plus fs-4"></i>
          
        </div>
        <hr />
        <Table responsive  bordered hover>
          <thead>
            <tr className="text-center">
              <th>Clase</th>
              <th>Profesor/a</th>
              <th>Fecha</th>
              <th>Horario</th>
              <th>URL de Imagen</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            <ItemProducto></ItemProducto>
          </tbody>
        </Table>
      </section>
    </div>
  )
}

export default Administrador
