import React from 'react';
import { Box, Grid, Card, CardMedia, Typography, CardContent } from '@mui/material';
import './categories.css'

const categories = [
  { title: 'Gastronomia', image: 'https://gastronomiapalacio.com/cdn/shop/articles/13-productos-gourmet-que-no-pueden-faltar-en-tu-alacena.jpg?v=1632852607' },
  { title: 'Ropa', image: 'https://www.residuosprofesional.com/wp-content/uploads/2019/05/ropa.jpg' },
  { title: 'Hogar', image: 'https://i0.wp.com/foodandpleasure.com/wp-content/uploads/2023/09/decoracion-otono-shutterstock.jpg?fit=1280%2C853&ssl=1' },
  { title: 'Deportes', image: 'https://media.istockphoto.com/id/1188462138/es/foto/variedad-de-accesorios-deportivos-en-superficie-de-madera.jpg?s=612x612&w=0&k=20&c=RRfYqj2LUY-TJ2BtOBHhlIwDJufPN4fVVGZHokCMdUI=' },
  { title: 'Belleza', image: 'https://i0.wp.com/elplanetaurbano.com/wp-content/uploads/2023/03/Productos-sutentables.jpg?resize=1250%2C720&ssl=1' },
  { title: 'Tecnología', image: 'https://img.freepik.com/foto-gratis/arreglo-coleccion-estacionaria-moderna_23-2149309649.jpg?semt=ais_hybrid' },

];

function Categories() {
    return (
      <Box
        sx={{
          height: 'auto',
          padding: '6% 10%', // Padding superior/inferior 8%, laterales 10%
          boxSizing: 'border-box',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Grid container spacing={2}>
          {categories.map((category, index) => (
            <Grid 
              item 
              xs={12} sm={index === 0 || index === 4 ? 6 : 3} 
              key={category.title}
            >
              <Card sx={{ position: 'relative', height: '100%' }}>
                <CardMedia
                  component="img"
                  height="100%"
                  image={category.image}
                  alt={category.title}
                />
                {/* Contenedor para el título */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo oscuro semi-transparente
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      color: 'white',
                      fontWeight: 'bold',
                      textTransform: 'uppercase',
                      textAlign: 'center',
                    }}
                  >
                    {category.title}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }
  
  export default Categories;