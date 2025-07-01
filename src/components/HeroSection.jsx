import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

function HeroSection() {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        py: 10,
        textAlign: 'center',
        width: '100%'
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Typography 
          variant="h1" 
          component="h1" 
          gutterBottom 
          className="main-heading"  
          sx={{ 
            fontWeight: 'bold', 
            fontSize: { xs: '2.5rem', md: '3.5rem' }
          }}
        >
          DigiPort Zadar - Servis Računala i Mobitela
        </Typography>
        <Typography variant="h3" sx={{ mb: 4, opacity: 0.9 }}>
          Vaš pouzdani servis za popravak i prodaju računalne opreme
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, fontSize: '1.2rem' }}>
          Profesionalni popravak računala, laptopa i mobitela koji radimo više od 10 godina.
          Nudimo brza i učinkovita rješenja za sve vaše IT probleme, od jednostavnih popravaka 
          do složenih nadogradnji sustava.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            size="large"
            component="a"
            href="/kontakt"
            sx={{
              backgroundColor: 'white',
              color: '#667eea',
              '&:hover': { backgroundColor: '#f5f5f5' },
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              textDecoration: 'none'
            }}
          >
            Kontaktirajte nas
          </Button>
          <Button
            variant="outlined"
            size="large"
            component="a"
            href="/usluge"
            sx={{
              borderColor: 'white',
              color: 'white',
              '&:hover': { 
                borderColor: '#f5f5f5',
                backgroundColor: 'rgba(255,255,255,0.1)'
              },
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              textDecoration: 'none'
            }}
          >
            Sve naše usluge
          </Button>
        </Box>  
      </Container>
    </Box>
  );
}

export default HeroSection;