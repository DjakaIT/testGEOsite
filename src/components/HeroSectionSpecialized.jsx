import React from 'react';
import { Box, Container, Typography, Breadcrumbs, Link } from '@mui/material';
import { Home, Build } from '@mui/icons-material';

function HeroSectionSpecialized() {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
        color: 'white',
        py: 8,
        textAlign: 'center',
        width: '100%'
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Breadcrumbs 
          aria-label="breadcrumb" 
          sx={{ 
            mb: 4, 
            justifyContent: 'center', 
            display: 'flex',
            '& .MuiBreadcrumbs-separator': { color: 'white' },
            '& .MuiBreadcrumbs-ol': { justifyContent: 'center' }
          }}
        >
          <Link 
            color="inherit" 
            href="/" 
            sx={{ 
              display: 'flex', 
              alignItems: 'center',
              textDecoration: 'none',
              color: 'rgba(255, 255, 255, 0.9)',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',  // Lighter background for this dark section
              px: 1.5,
              py: 0.5,
              borderRadius: 1,
              transition: 'all 0.2s ease',
              '&:hover': { 
                textDecoration: 'underline',
                backgroundColor: 'rgba(255, 255, 255, 0.25)',
                color: 'white'
              }
            }}
          >
            <Home sx={{ mr: 0.5 }} fontSize="inherit" />
            Početna
          </Link>
          <Typography color="white" sx={{ display: 'flex', alignItems: 'center' }}>
            <Build sx={{ mr: 0.5 }} fontSize="inherit" />
            Specijalizirane usluge
          </Typography>
        </Breadcrumbs>

        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Specijalizirane usluge i prodaja
        </Typography>
        <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
          Napredni popravci i kvalitetni IT proizvodi
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, fontSize: '1.2rem' }}>
          Profesionalni refurbishing, specijalizirani popravci i prodaja IT opreme u Zadru
        </Typography>
      </Container>
    </Box>
  );
}

export default HeroSectionSpecialized;