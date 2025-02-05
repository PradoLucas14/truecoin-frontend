import { useState } from 'react'
import './App.css'
import Home from './pages/home/Home'
import Register from './pages/register/Register'
import "bootstrap/dist/css/bootstrap.min.css"
import Menu from'./components/commun/menu/Menu'

function App() {
  const usuario = JSON.parse(sessionStorage.getItem("UsuarioTrueCoin")) || "";

  const [suarioLogueado, setUsuarioLogueado] = useState(usuario);

  return (
    <>
      {/* <Home/> */}
      <Menu></Menu>
      {/* <Register setUsuarioLogueado={setUsuarioLogueado}></Register> */}
    </>
  )
}

export default App
