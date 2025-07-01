import React from 'react';
import { Box, Container, Typography, Breadcrumbs, Link } from '@mui/material';
import { Home, Info } from '@mui/icons-material';

function AboutHeroSection() {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)',
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
              backgroundColor: 'rgba(0, 0, 0, 0.2)',  
              px: 1.5,
              py: 0.5,
              borderRadius: 1,
              transition: 'all 0.2s ease',
              '&:hover': { 
                textDecoration: 'underline',
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                color: 'white'
              }
            }}
          >
            <Home sx={{ mr: 0.5 }} fontSize="inherit" />
            Početna
          </Link>
          <Typography color="white" sx={{ display: 'flex', alignItems: 'center' }}>
            <Info sx={{ mr: 0.5 }} fontSize="inherit" />
            O nama
          </Typography>
        </Breadcrumbs>

        <Typography 
          variant="h1" 
          component="h1" 
          gutterBottom 
          className="main-heading"
          sx={{ fontWeight: 'bold' }}
        >
          O DigiPort-u - Pouzdani računalni Servis u Zadru
        </Typography>
        <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
          Dostupni uvijek, brzi u reagiranju i učinkoviti uz minimalne cijene!
        </Typography>
      </Container>
    </Box>
  );
}

export default AboutHeroSection;