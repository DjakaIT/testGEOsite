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
              '&:hover': { textDecoration: 'underline' }
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

        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          O DigiPort-u
        </Typography>
        <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
          Vaš pouzdani IT partner u Zadru
        </Typography>
      </Container>
    </Box>
  );
}

export default AboutHeroSection;