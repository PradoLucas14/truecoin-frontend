import { useState } from 'react'
import './App.css'
import Home from './pages/home/Home'
import Register from './pages/register/Register'
import "bootstrap/dist/css/bootstrap.min.css"
import Menu from'./components/commun/menu/Menu'
import Footer from './components/commun/footer/Footer'

function App() {
  const usuario = JSON.parse(sessionStorage.getItem("UsuarioTrueCoin")) || "";

  const [suarioLogueado, setUsuarioLogueado] = useState(usuario);

  return (
    <>
    
      <Menu></Menu>
      <Home></Home>
      <Footer></Footer>
      {/* <Register setUsuarioLogueado={setUsuarioLogueado}></Register> */}
    </>
  )
}

export default App
