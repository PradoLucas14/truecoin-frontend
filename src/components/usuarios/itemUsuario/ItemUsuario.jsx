import React from 'react'

const ItemUsuario = () => {
  return (
    <tr className='text-center'>
      <td className="">1</td>
      <td className=''>Prado Brian</td>
      <td className="">nicolas@gmail.com</td>
      <td>Usuario</td>
      <td className="">
        True
      </td>
      <td className="">
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
