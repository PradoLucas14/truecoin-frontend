//Trabajar logica aqui
// Trabajer la logica y declarar el usuario
const userAdmin = {
    email: "admin@fitfactory.com",
    password: "Fitfac1234"
}

export const login = (usuario) => {
    if (usuario.email === userAdmin.email && usuario.password === userAdmin.password) {
        sessionStorage.setItem("usuariofitfactory", JSON.stringify(userAdmin.email))
        return true
    } else {
        return false
    }
}
