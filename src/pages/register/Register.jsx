import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  Container,
} from "@mui/material";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh", // Contenedor principal que ocupa toda la pantalla
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Container
        sx={{
          width: "80%",
          height: "70%",
          display: "flex",
          boxShadow: 4,
          borderRadius: 3,
          overflow: "hidden",
          backgroundColor: "#fff",
        }}
      >
        {/* Columna izquierda: Formulario */}
        <Grid
          container
          sx={{
            flex: 1,
          }}
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 3,
            }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: 400,
              }}
            >
              <Typography component="h1" variant="h5" gutterBottom>
                Registro
              </Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate>
                <TextField
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Nombre completo"
                  value={formData.name}
                  onChange={handleChange}
                  margin="normal"
                />
                <TextField
                  name="email"
                  required
                  fullWidth
                  id="email"
                  label="Correo electrónico"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  margin="normal"
                />
                <TextField
                  name="phone"
                  required
                  fullWidth
                  id="phone"
                  label="Teléfono"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  margin="normal"
                />
                <TextField
                  name="password"
                  required
                  fullWidth
                  id="password"
                  label="Contraseña"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  margin="normal"
                />
                <TextField
                  name="confirmPassword"
                  required
                  fullWidth
                  id="confirmPassword"
                  label="Confirmar contraseña"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  margin="normal"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 2 }}
                >
                  Registrarse
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* Columna derecha: Imagen con overlay */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              position: "relative",
              backgroundImage: `url('https://via.placeholder.com/800x600')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)", // Overlay semitransparente
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
                textAlign: "center",
                padding: 3,
              }}
            >
              <Typography variant="h3" gutterBottom>
                Hola, somos Truecoin
              </Typography>
              <Typography variant="h6">
                Únete a esta increíble comunidad
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Register;
