import React from 'react';
import { Box, Container, Typography, Card, CardContent, CardMedia, Chip } from '@mui/material';
import {
  Memory,
  Thermostat,
  CleaningServices,
  Speed,
  Security,
  Restore,
  Hardware,
  Computer,
  Laptop,
  PhoneIphone,
  Dvr,
  Router
} from '@mui/icons-material';
import thermalPasteImage from '../assets/thermalPaste.JPG';

function SpecializedFixesSection() {
  const specializedServices = [
    {
      id: 1,
      icon: <Restore sx={{ fontSize: 40 }} />,
      title: 'Refurbishing računala',
      description: 'Potpuna obnova starijih računala - čišćenje, zamjena komponenti, optimizacija performansi',
      price: 'Od 20 €',
      duration: '2-3 dana',
      complexity: 'Napredna'
    },
    {
      id: 2,
      icon: <Thermostat sx={{ fontSize: 40 }} />,
      title: 'Zamjena termalne paste',
      description: 'Profesionalna zamjena termalne paste za optimalno hlađenje procesora i grafičke kartice',
      price: 'Od 11 €',
      duration: '1 dan',
      complexity: 'Srednja'
    },
    {
      id: 3,
      icon: <CleaningServices sx={{ fontSize: 40 }} />,
      title: 'Dubinsko čišćenje',
      description: 'Detaljno čišćenje unutrašnjosti računala, ventilatora i komponenti od prašine',
      price: 'Od 13 €',
      duration: '1 dan',
      complexity: 'Osnovna'
    },
    {
      id: 4,
      icon: <Memory sx={{ fontSize: 40 }} />,
      title: 'Nadogradnja RAM memorije',
      description: 'Ugradnja dodatne memorije za poboljšanje performansi sistema',
      price: 'Od 16 € + dio',
      duration: '1 dan',
      complexity: 'Osnovna'
    },
    {
      id: 5,
      icon: <Speed sx={{ fontSize: 40 }} />,
      title: 'SSD ugradnja i migracija',
      description: 'Zamjena HDD-a sa SSD diskom i prijenos svih podataka',
      price: 'Od 27 € + dio',
      duration: '1-2 dana',
      complexity: 'Srednja'
    },
    {
      id: 6,
      icon: <Security sx={{ fontSize: 40 }} />,
      title: 'Data recovery',
      description: 'Oporavak izgubljenih podataka s oštećenih diskova i memorijskih kartica',
      price: 'Od 40 €',
      duration: '3-7 dana',
      complexity: 'Ekspertna'
    },
    {
      id: 7,
      icon: <Hardware sx={{ fontSize: 40 }} />,
      title: 'Popravak matične ploče',
      description: 'Mikrolemljenje i popravak komponenti na matičnoj ploči',
      price: 'Od 33 €',
      duration: '3-5 dana',
      complexity: 'Ekspertna'
    },
    {
      id: 8,
      icon: <Computer sx={{ fontSize: 40 }} />,
      title: 'Gaming PC optimizacija',
      description: 'Posebna optimizacija sistema za gaming performanse',
      price: 'Od 24 €',
      duration: '1-2 dana',
      complexity: 'Napredna'
    },
    {
      id: 9,
      icon: <Laptop sx={{ fontSize: 40 }} />,
      title: 'Laptop hinge popravak',
      description: 'Popravak polomljenih šarki na laptop računalima',
      price: 'Od 29 €',
      duration: '2-3 dana',
      complexity: 'Napredna'
    },
    {
      id: 10,
      icon: <PhoneIphone sx={{ fontSize: 40 }} />,
      title: 'Mobilni popravci',
      description: 'Zamjena ekrana, baterija, kamera i drugih komponenti pametnih telefona',
      price: 'Od 20 € + dio',
      duration: '1-2 dana',
      complexity: 'Srednja'
    },
    {
      id: 11,
      icon: <Dvr sx={{ fontSize: 40 }} />,
      title: 'Ugradnja sigurnosnih sustava',
      description: 'Instalacija i konfiguracija sigurnosnih kamera i DVR sistema',
      price: 'Od 53 €',
      duration: '1 dan',
      complexity: 'Napredna'
    },
    {
      id: 12,
      icon: <Router sx={{ fontSize: 40 }} />,
      title: 'Mrežni setup',
      description: 'Konfiguracija routera, Wi-Fi mreža i mrežnih komponenti',
      price: 'Od 16 €',
      duration: '1 dan',
      complexity: 'Srednja'
    }
  ];

  const getComplexityColor = (complexity) => {
    switch (complexity) {
      case 'Osnovna': return '#4caf50';
      case 'Srednja': return '#ff9800';
      case 'Napredna': return '#f44336';
      case 'Ekspertna': return '#9c27b0';
      default: return '#757575';
    }
  };

  return (
    <Box sx={{ py: 8, backgroundColor: '#f8f9fa' }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Typography variant="h3" component="h2" textAlign="center" gutterBottom sx={{ mb: 2 }}>
          Specijalizirane usluge popravka
        </Typography>
        <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 6 }}>
          Profesionalni pristup najsloženijim IT problemima
        </Typography>
        
        {/* FIXED LAYOUT: Using CSS Grid instead of MUI Grid for better control */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',                    // 1 stupac na mobitelu
              sm: 'repeat(2, 1fr)',         // 2 stupca na tablet
              lg: 'repeat(3, 1fr)'          // 3 stupca na desktop
            },
            gap: { xs: 3, sm: 4 },         // Ustaljen razmak između kartica
            mb: 6                          // Donja margina
          }}
        >
          {specializedServices.map((service, index) => (
            <Card
              key={index}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',             
                minHeight: '450px',         
                maxHeight: '450px',         
                borderRadius: 2,            
                overflow: 'hidden',         
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 30px rgba(0,0,0,0.15)'
                }
              }}
            >
              <Box sx={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  height="200"
                  width="100%"
                  image={thermalPasteImage}
                  alt={`${service.title} - IT servis DigiPort Zadar`}
                  loading="lazy"
                  sx={{ objectFit: 'cover' }}
                  data-location="Zadar, Croatia"
                  data-service-type={service.complexity}
                  data-geo-region="HR-13"
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    backgroundColor: 'rgba(255,255,255,0.9)',
                    borderRadius: '50%',
                    p: 1,
                    color: '#667eea'
                  }}
                >
                  {service.icon}
                </Box>
              </Box>
              
              <CardContent 
                sx={{ 
                  flexGrow: 1,
                  p: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between' 
                }}
              >
                <Box>
                  <Typography 
                    variant="h6" 
                    component="h3" 
                    gutterBottom 
                    sx={{ 
                      fontWeight: 600,
                      minHeight: '48px',    
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    {service.title}
                  </Typography>
                  
                  <Typography 
                    variant="body2" 
                    color="text.secondary" 
                    sx={{ 
                      mb: 3, 
                      lineHeight: 1.6,
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      height: '60px'        
                    }}
                  >
                    {service.description}
                  </Typography>
                </Box>
                
                <Box sx={{ mt: 'auto' }}>
                  <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    mb: 2
                  }}>
                    <Typography variant="h6" color="primary" sx={{ fontWeight: 600 }}>
                      {service.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {service.duration}
                    </Typography>
                  </Box>
                  
                  <Chip
                    label={service.complexity}
                    size="small"
                    sx={{
                      backgroundColor: getComplexityColor(service.complexity),
                      color: 'white',
                      fontWeight: 500
                    }}
                  />
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
        
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Typography variant="body1" color="text.secondary">
            * Cijene su informativne i mogu varirati ovisno o složenosti problema
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default SpecializedFixesSection;