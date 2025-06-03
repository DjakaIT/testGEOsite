import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Chip } from '@mui/material';
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

function SpecializedFixesSection() {
  const specializedServices = [
    {
      icon: <Restore sx={{ fontSize: 40 }} />,
      title: 'Refurbishing računala',
      description: 'Potpuna obnova starijih računala - čišćenje, zamjena komponenti, optimizacija performansi',
      price: 'Od 150 kn',
      duration: '2-3 dana',
      complexity: 'Napredna'
    },
    {
      icon: <Thermostat sx={{ fontSize: 40 }} />,
      title: 'Zamjena termalne paste',
      description: 'Profesionalna zamjena termalne paste za optimalno hlađenje procesora i grafičke kartice',
      price: 'Od 80 kn',
      duration: '1 dan',
      complexity: 'Srednja'
    },
    {
      icon: <CleaningServices sx={{ fontSize: 40 }} />,
      title: 'Dubinsko čišćenje',
      description: 'Detaljno čišćenje unutrašnjosti računala, ventilatora i komponenti od prašine',
      price: 'Od 100 kn',
      duration: '1 dan',
      complexity: 'Osnovna'
    },
    {
      icon: <Memory sx={{ fontSize: 40 }} />,
      title: 'Nadogradnja RAM memorije',
      description: 'Ugradnja dodatne memorije za poboljšanje performansi sistema',
      price: 'Od 120 kn + dio',
      duration: '1 dan',
      complexity: 'Osnovna'
    },
    {
      icon: <Speed sx={{ fontSize: 40 }} />,
      title: 'SSD ugradnja i migracija',
      description: 'Zamjena HDD-a sa SSD diskom i prijenos svih podataka',
      price: 'Od 200 kn + dio',
      duration: '1-2 dana',
      complexity: 'Srednja'
    },
    {
      icon: <Security sx={{ fontSize: 40 }} />,
      title: 'Data recovery',
      description: 'Oporavak izgubljenih podataka s oštećenih diskova i memorijskih kartica',
      price: 'Od 300 kn',
      duration: '3-7 dana',
      complexity: 'Ekspertna'
    },
    {
      icon: <Hardware sx={{ fontSize: 40 }} />,
      title: 'Popravak matične ploče',
      description: 'Mikrolemljenje i popravak komponenti na matičnoj ploči',
      price: 'Od 250 kn',
      duration: '3-5 dana',
      complexity: 'Ekspertna'
    },
    {
      icon: <Computer sx={{ fontSize: 40 }} />,
      title: 'Gaming PC optimizacija',
      description: 'Posebna optimizacija sistema za gaming performanse',
      price: 'Od 180 kn',
      duration: '1-2 dana',
      complexity: 'Napredna'
    },
    {
      icon: <Laptop sx={{ fontSize: 40 }} />,
      title: 'Laptop hinge popravak',
      description: 'Popravak polomljenih šarki na laptop računalima',
      price: 'Od 220 kn',
      duration: '2-3 dana',
      complexity: 'Napredna'
    },
    {
      icon: <PhoneIphone sx={{ fontSize: 40 }} />,
      title: 'Mobilni popravci',
      description: 'Zamjena ekrana, baterija, kamera i drugih komponenti pametnih telefona',
      price: 'Od 150 kn + dio',
      duration: '1-2 dana',
      complexity: 'Srednja'
    },
    {
      icon: <Dvr sx={{ fontSize: 40 }} />,
      title: 'CCTV sistem setup',
      description: 'Instalacija i konfiguracija sigurnosnih kamera i DVR sistema',
      price: 'Od 400 kn',
      duration: '1 dan',
      complexity: 'Napredna'
    },
    {
      icon: <Router sx={{ fontSize: 40 }} />,
      title: 'Mrežni setup',
      description: 'Konfiguracija routera, Wi-Fi mreža i mrežnih komponenti',
      price: 'Od 120 kn',
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
        
        <Grid container spacing={4}>
          {specializedServices.map((service, index) => (
            <Grid item xs={12} sm={6} lg={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
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
                    image="/src/assets/thermalPaste.jpg"
                    alt={service.title}
                    sx={{ objectFit: 'cover' }}
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
                
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                    {service.title}
                  </Typography>
                  
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6 }}>
                    {service.description}
                  </Typography>
                  
                  <Box sx={{ mt: 'auto' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
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
            </Grid>
          ))}
        </Grid>
        
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