import { useState } from 'react'
import './App.css'
import Home from './pages/home/Home'
import Register from './pages/register/Register'
import "bootstrap/dist/css/bootstrap.min.css"
import Menu from'./components/commun/menu/Menu'
import Footer from './components/commun/footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const usuario = JSON.parse(sessionStorage.getItem("UsuarioTrueCoin")) || "";

  const [suarioLogueado, setUsuarioLogueado] = useState(usuario);

  return (
    <>
      <BrowserRouter>
        <Menu></Menu>

        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/Login' element={<Register></Register>}></Route>
          {/* <Route path='/Nosotros' element={<Nosotros></Nosotros>}></Route> */}
          <Route path='/Productos'></Route>
        </Routes>

        <Footer></Footer>
      </BrowserRouter>
      
      
      
      {/* <Register setUsuarioLogueado={setUsuarioLogueado}></Register> */}
    </>
  )
}

export default App
