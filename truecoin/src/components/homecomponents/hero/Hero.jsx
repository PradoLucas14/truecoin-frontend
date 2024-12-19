import React from 'react';
import Slider from 'react-slick';
import { Button, Typography, Box } from '@mui/material';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Hero.css"

// Importación de imágenes locales
import image1 from '../../../assets/images/image1.jpg';
import image2 from '../../../assets/images/image2.jpg';
import image3 from '../../../assets/images/image3.jpg';

function Hero() {
  const sliderImages = [image1, image2, image3];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Box 
      className="hero" 
      sx={{ 
        position: 'relative', 
        width: '100%', 
        height: '100vh', 
        overflow: 'hidden', 
        margin: 0, 
        padding: 0 
      }}
    >
      {/* Slider */}
      <Slider {...settings}>
        {sliderImages.map((image, index) => (
          <Box key={index} sx={{ position: 'relative', height: '100vh' }}>
            {/* Image */}
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover'}}
            />
            {/* Overlay */}
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semitransparente
                zIndex: 5, // Debajo del texto
              }}
            />
          </Box>
        ))}
      </Slider>

      {/* Fixed Text and Button */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: 'white',
          zIndex: 10, // Encima del overlay
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: 'none', mb: 2 , textAlign: 'center' , fontSize:'1.4rem'}}>
          Más que un mercado, una comunidad donde la confianza y las oportunidades se unen para transformar la compra y venta de productos        
        </Typography>
        <Button
        className="custom-button"
        size="large"
        >
          Registrate
        </Button>
      </Box>
    </Box>
  );
}

export default Hero;
