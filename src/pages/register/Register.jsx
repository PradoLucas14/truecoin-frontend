import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  Container,
} from "@mui/material";
import"./Register.css"

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
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "linear-gradient(135deg, #00C9FF, violet)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container
        disableGutters
        sx={{
          width: "100%",
          maxWidth: "80%",
          height: "70%",
          display: "flex",
          boxShadow: 4,
          borderRadius: 0,
          overflow: "hidden",
          backgroundColor: "#fff",
        }}
      >
        <Grid
          container
          sx={{
            flex: 1,
            width: "100%",
            height: "100%",
            margin: 0,
          }}
        >
          {/* Columna izquierda: Formulario */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: 0,
              height: "100%",
              width: "100%",
            }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: 400,
                paddingX: 3,
              }}
            >
              <Typography component="h1" variant="h5" gutterBottom className="tittleRegister">
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
              height: "100%",
              width: "100%",
              margin: 0,
              padding: 0,
              backgroundImage: `url('https://media.vogue.es/photos/5f96ff4eb353d2e554b4f75a/master/pass/MIA_BAKERY_0962_Raul%20Co%CC%81rdoba%20Photography.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "92%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
                textAlign: "center",
                padding: 3,
              }}
            >
            <Typography
                variant="h3"
                gutterBottom
                sx={{
                    background: "linear-gradient(135deg, pink,  violet)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}
                >
                Hola, somos Truecoin
                </Typography>
                <Typography
                variant="h6"
                sx={{
                    background: "linear-gradient(135deg, #fff, #fff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}
                >
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
