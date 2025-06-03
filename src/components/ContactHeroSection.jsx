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
            <ContactMail sx={{ mr: 0.5 }} fontSize="inherit" />
            Kontakt
          </Typography>
        </Breadcrumbs>

        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Kontaktirajte nas
        </Typography>
        <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
          Dostupni smo za sva vaša IT pitanja
        </Typography>
      </Container>
    </Box>
  );
}

export default ContactHeroSection;