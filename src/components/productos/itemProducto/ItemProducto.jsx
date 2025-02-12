import React from 'react'

const ItemProducto = () => {
  return (
    <tr>
      <td className="text-center">1</td>
      <td>1KG Pan De Horno De Barro</td>
      <td className="">$4000</td>
      <td>Descripcion jkdsd</td>
      <td className="text-center">
        <img
          src="https://images.pexels.com/photos/30624522/pexels-photo-30624522.jpeg?auto=compress&cs=tinysrgb&w=400"
          className="imgAdministrador"
          alt="Imagen Producto"
        ></img>
      </td>
      <td className="text-center">
        <button  className="btn m-1 btnOpciones">
          <i className="bi bi-pencil-square"></i>
        </button>
        <button className="btn btnOpciones">
          <i className="bi bi-trash" onClick={borrarClase} ></i>
        </button>
      </td>
    </tr>
  )
}

export default ItemProducto
