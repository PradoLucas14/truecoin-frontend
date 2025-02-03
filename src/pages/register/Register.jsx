import React from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import './Register.css';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import {login} from"../../helpers/queries"
import Logo from "../../assets/Logo.png"

const Register = ({setUsuarioLogueado}) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();



  const onSubmit = (usuario) => {
    if (login(usuario)) {
      Swal.fire({
        title: "  Usuario logueado",
        text: "Bienvenido a TrueCoin",
        icon: "success",
      });
      setUsuarioLogueado(usuario.email);
      
    } else {
      Swal.fire({
        title: "Error en el login",
        text: "Email o contraseña incorrecta",
        icon: "error",
      });
    }
  };

  return (
    <div className="container-fluid mainBody">

    <div className=''>
        <img src={Logo} alt="" className='logoTrueCoin' />
    </div>

      <Row className='justify-content-center'>
        
        <Col sm={8} md={7} lg={4} className=' py-5 bgForm'>
          <h1 className='text-center py-3 text-white'>¡Bienvenido De Nuevo!</h1>
          <div className='d-flex px-2 justify-content-center text-white'>
            <p className='pe-2 '>¿Primera vez en TrueCoin? </p>
            <p className='text-decoration-underline'>CrearCuenta</p>
          </div>

          <Form
            onSubmit={handleSubmit(onSubmit)}
            className="px-2 px-md-5 pb-2 formText py-4 mx-5"
          >
            <Form.Group className="mb-3 text-white" controlId="formBasicEmail">
              <Form.Label className='fw-bold pb-2'>Nombre de usuario</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ej: juan@mail.com"
                className='styleImputDates'
                {...register("email", {
                  required: "El correo es obligatorio",
                  minLength: {
                    value: 4,
                    message: "El email debe contener al menos 4 caracteres",
                  },
                  maxLength: {
                    value: 250,
                    message: "El email debe contener como máximo 250 caracteres",
                  },
                  pattern: {
                    value:
                      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                    message:
                      "El correo debe ser un email valido Ej: nombre@mail.com",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.email?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3 text-white" controlId="formBasicPassword">
              <Form.Label className='fw-bold'>Contraseña:</Form.Label>
              <Form.Control
                type="password"
                placeholder="ingrese una contraseña"
                className='styleImputDates'
                {...register("password", {
                  required: "El password es obligatorio",
                  minLength: {
                    value: 8,
                    message: "el minimo es de 8 caracteres",
                  },
                  maxLength: {
                    value: 12,
                    message: "el maximo es de 15 caracteres",
                  },
                  pattern: {
                    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                    message:
                      "El password debe contener al menos una letra mayúscula, una letra minúscula y un número",
                  },
                })}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Text className="text-danger">
                {" "}
                {errors.password?.message}
              </Form.Text>
            </Form.Group>
            <div className="">
              <div className='d-flex justify-content-between text-white'>
                <label>
                  <input type="checkbox" /> Mantener Conexión
                </label>
                <p className='text-decoration-underline'>¿Has olvidado tu contraseña?</p>
              </div>
              <div className='text-center'>
                <button className="bgButton px-3 py-1 border-1 styleButton text-white" type="submit">
                  Acceso
                </button>
              </div>

            </div>
          </Form>

        </Col>

      </Row>
      


    </div>
  );
};

export default Register;
