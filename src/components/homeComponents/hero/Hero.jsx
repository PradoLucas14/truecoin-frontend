import React from "react";
import { Button, Typography, Box } from "@mui/material";
import { Carousel } from "react-responsive-carousel";

const images = [
  "https://images.pexels.com/photos/102129/pexels-photo-102129.jpeg?cs=srgb&dl=pexels-daiangan-102129.jpg&fm=jpg",
  "https://prensaeventos.cl/wp-content/uploads/2021/09/ViewSonic-presenta-sus-soluciones-4K-para-entretenimiento-educacion-edicion-profesional-y-creacion-de-contenido.jpg",
  "https://images.pexels.com/photos/5857294/pexels-photo-5857294.jpeg?cs=srgb&dl=pexels-cottonbro-5857294.jpg&fm=jpg",
];

function Hero() {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh", // Altura completa de la pantalla
        width: "100%",
        overflow: "hidden",
      }}
    >
      {/* Carrusel de imágenes en el fondo */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1, // Capa de fondo
        }}
      >
        <Carousel
          autoPlay // Hacer que el carrusel se desplace automáticamente
          infiniteLoop // Hacer el carrusel infinito
          showThumbs={false} // No mostrar miniaturas
          showStatus={false} // No mostrar la barra de estado
          interval={10000} // Intervalo de tiempo entre transiciones
          transitionTime={1000} // Tiempo de transición entre las imágenes
          swipeable={true} // Permitir deslizar las imágenes con el ratón
        >
          {images.map((image, index) => (
            <Box
              key={index}
              sx={{
                height: "100vh",
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          ))}
        </Carousel>
      </Box>

      {/* Texto fijo en el overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)", // Efecto overlay
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 2, // Encima del carrusel
          color: "#fff",
          textAlign: "center",
        }}
      >
        <Typography variant="h3" gutterBottom>
          Bienvenido a Truecoin
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => alert("Botón presionado")}
        >
          REGISTRATE
        </Button>
      </Box>
    </Box>
  );
}

export default Hero;
