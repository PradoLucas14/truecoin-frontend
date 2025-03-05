//Trabajar logica aqui
// Trabajer la logica y declarar el usuario

// Constante para el usuario admin
const userAdmin = {
    email: "admin@ttruecoin2025.com",
    password: "TrueCOIN1234",
    role: "admin" // Atributo para tipo de usuario
};

// Constante para un usuario común
const userCommon = {
    email: "usuario@ttruecoin2025.com",
    password: "Usuario1234",
    role: "user" // Atributo para tipo de usuario
};

export const login = (usuario) => {
    // Verifica si el usuario admin
    if (usuario.email === userAdmin.email && usuario.password === userAdmin.password) {
        sessionStorage.setItem("usuarioTrueCoin", JSON.stringify(userAdmin));
        return { success: true, role: userAdmin.role };
    }
    
    // Verifica si el usuario común
    if (usuario.email === userCommon.email && usuario.password === userCommon.password) {
        sessionStorage.setItem("usuarioTrueCoin", JSON.stringify(userCommon));
        return { success: true, role: userCommon.role };
    }

    // Si las credenciales no coinciden
    return { success: false, role: null };
};
