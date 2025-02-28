import React from 'react'
import { Table } from 'react-bootstrap'
import ItemProducto from '../itemProducto/ItemProducto'

const TablaProductos = () => {
    return (
        <div>
            <section className="container mainSection ">
                <div className="d-flex justify-content-between align-items-center mt-5 py-3">
                    <h1 className="display-6 fw-normal">Gestionar Producto</h1>

                    <i className="bi bi-file-earmark-plus fs-4"></i>

                </div>
                <hr />
                <Table responsive bordered hover>
                    <thead>
                        <tr className="text-center">
                            <th>ID</th>
                            <th>Producto</th>
                            <th>Precio</th>
                            <th>Descripcion</th>
                            <th>URL de Imagen</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <ItemProducto></ItemProducto>
                        <ItemProducto></ItemProducto>
                        <ItemProducto></ItemProducto>
                        <ItemProducto></ItemProducto>

                    </tbody>
                </Table>
            </section>
        </div>
    )
}

export default TablaProductos
