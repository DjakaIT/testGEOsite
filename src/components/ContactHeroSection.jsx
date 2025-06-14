import React from 'react';
import { Box, Container, Typography, Breadcrumbs, Link } from '@mui/material';
import { Home, ContactMail } from '@mui/icons-material';

function ContactHeroSection() {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)',
        color: 'white',
        py: 8,
        textAlign: 'center',
        width: '100%'
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        {/* Improved Breadcrumbs with ARIA roles */}
        <nav aria-label="Breadcrumb" style={{ marginBottom: '1.5rem' }}>
          <Breadcrumbs 
            sx={{ 
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
                },
                '&:focus': {  // Added focus styles
                  outline: '2px solid white',
                  outlineOffset: '2px'
                }
              }}
            >
              <Home sx={{ mr: 0.5 }} fontSize="inherit" aria-hidden="true" />
              <span>Početna</span>
            </Link>
            {/* Current page with aria-current */}
            <Typography 
              color="white" 
              sx={{ 
                display: 'flex', 
                alignItems: 'center',
                px: 1.5,
                py: 0.5,
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                borderRadius: 1
              }}
              aria-current="page"
            >
              <ContactMail sx={{ mr: 0.5 }} fontSize="inherit" aria-hidden="true" />
              <span>Kontakt</span>
            </Typography>
          </Breadcrumbs>
        </nav>

        <Typography 
          variant="h1" 
          component="h1" 
          gutterBottom 
          sx={{ 
            fontWeight: 'bold',
            className: 'main-heading'
          }}
        >
          Kontaktirajte DigiPort - IT Servis Zadar
        </Typography>
        <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
          Dostupni smo za sva vaša IT pitanja
        </Typography>
      </Container>
    </Box>
  );
}

export default ContactHeroSection;