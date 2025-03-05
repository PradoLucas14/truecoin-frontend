import { useState } from 'react'
import './App.css'
import Home from './pages/home/Home'
import Register from './pages/register/Register'
import "bootstrap/dist/css/bootstrap.min.css"
import Menu from'./components/commun/menu/Menu'
import Footer from './components/commun/footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DatosUsuario from './pages/datosUsuario/DatosUsuario'
import Administrador from './pages/administrador/Administrador'

function App() {
  const usuario = JSON.parse(sessionStorage.getItem("UsuarioTrueCoin")) || "";

  const [suarioLogueado, setUsuarioLogueado] = useState(usuario);

  return (
    <>
      <BrowserRouter>
        <Menu 
          uarioLogueado={suarioLogueado}
          setUsuarioLogueado={setUsuarioLogueado}
        ></Menu>

        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/Login' element={<Register setUsuarioLogueado={setUsuarioLogueado}></Register>}></Route>
          {/* <Route path='/Nosotros' element={<Nosotros></Nosotros>}></Route> */}
          <Route path='/Administrador' element={<Administrador></Administrador>}></Route>
          <Route path='/Usario' element={<DatosUsuario></DatosUsuario>}></Route>
          <Route path='/Productos'></Route>
        </Routes>

        <Footer></Footer>
      </BrowserRouter>
      
      
      
      {/* <Register setUsuarioLogueado={setUsuarioLogueado}></Register> */}
    </>
  )
}

export default App
