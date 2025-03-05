import React from 'react'
import { Table } from 'react-bootstrap'


const TablaUsuarios = () => {
  return (
    <div>

      <section className="container mainSection">
        <div className="d-flex justify-content-between align-items-center mt-5 py-3">
          <h1 className="display-6 fw-bold">Gestionar Usuarios</h1>

          <i className="bi bi-file-earmark-plus fs-4"></i>

        </div>
        <hr />
        <Table responsive bordered hover>
          <thead>
            <tr className="text-center">
              <th>ID</th>
              <th>Nombre Completo</th>
              <th>Email</th>
              <th>Rol</th>
              <th>Estado De Cuenta</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>


          </tbody>
        </Table>
      </section>
    </div>
  )
}

export default TablaUsuarios
