import React from 'react'

const ItemUsuario = () => {
  return (
    <tr>
      <td className="text-center">1</td>
      <td>Prado Brian</td>
      <td className="">$nicolas@gmail.com</td>
      <td>Usuario</td>
      <td className="text-center">
        True
      </td>
      <td className="text-center">
        <button className="btn m-1 btnOpciones">
          <i className="bi bi-pencil-square"></i>
        </button>
        <button className="btn btnOpciones">
          <i className="bi bi-trash" ></i>
        </button>
      </td>
    </tr>
  )
}

export default ItemUsuario
