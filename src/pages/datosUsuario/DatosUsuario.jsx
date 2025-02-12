import React, { useState } from 'react'
import './datosUsuarios.css'
import Modena from '../../assets/moneda.png'
import { Button, Modal } from 'react-bootstrap'
import Moneda from '../../assets/moneda.png'


const DatosUsuario = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='container-fluid py-3'>
            <div className='d-flex flex-colum justify-content-center'>
                <div className=''>
                    <p className=''>Caserez Laura</p>
                    <img src="https://images.pexels.com/photos/8558908/pexels-photo-8558908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Img del usuario" className='imgPerfilUsuario' />
                </div>
            </div>
            <div className="d-flex align-items-center gap-2">
                <img src={Modena} alt="" width={130} />
                <p className="cantidadMoneda " >25000</p>
                <button className="border-0 m-0 px-1 d-flex align-items-center" onClick={handleShow}>
                    <i className="bi bi-plus-circle fs-5"></i>
                </button>
            </div>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>TrueCoins</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <p className="promocion">
                        5000 ARS  <span className='flechaIgual px-2'> ---> </span>  <img src={Moneda} alt="" width={40} /> 25000
                    </p>
                    <p className="promocion">
                        7000 ARS  <span className='flechaIgual px-2'> ---> </span>  <img src={Moneda} alt="" width={40} /> 35000
                    </p>
                    <p className="promocion">
                        10000 ARS <span className='flechaIgual px-2'> ---> </span>  <img src={Moneda} alt="" width={40} /> 50000
                    </p>
                    <p className="promocion">
                        15000 ARS <span className='flechaIgual px-2'> ---> </span>  <img src={Moneda} alt="" width={40} /> 75000
                    </p>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" onClick={handleClose}>
                        comprar
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default DatosUsuario
