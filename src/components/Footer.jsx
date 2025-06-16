import React from 'react';
import { Box, Container, Typography, Grid, Divider, Link } from '@mui/material';
import { LocationOn, Phone, Email } from '@mui/icons-material';

function Footer() {
  return (
    <Box sx={{ backgroundColor: '#2c3e50', color: 'white', py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              DigiPort
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Vaš pouzdani partner za sve IT potrebe u Zadru i okolici.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Kontakt
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <LocationOn sx={{ mr: 1, fontSize: 20 }} />
              <Typography variant="body2">Zadar, Hrvatska</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Phone sx={{ mr: 1, fontSize: 20 }} />
              <Typography variant="body2">+385 23 123 456</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Email sx={{ mr: 1, fontSize: 20 }} />
              <Typography variant="body2">info@digiport.hr</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Radno vrijeme
            </Typography>
            <Typography variant="body2">
              Ponedjeljak - Petak: 08:00 - 20:00
            </Typography>
            <Typography variant="body2">
              Subota: 09:00 - 15:00
            </Typography>
            <Typography variant="body2">
              Nedjelja: Zatvoreno
            </Typography>
          </Grid>
        </Grid>
        <Divider sx={{ my: 3, backgroundColor: 'rgba(255,255,255,0.2)' }} />
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 4 }}>
          <Link
            href="/privatnost"
            color="inherit"
            sx={{
              textDecoration: 'none',
              '&:hover': { textDecoration: 'underline' },
            }}
          >
            Pravila privatnosti
          </Link>
          <Typography color="inherit">|</Typography>
          <Link
            href="/uvjeti-koristenja"
            color="inherit"
            sx={{
              textDecoration: 'none',
              '&:hover': { textDecoration: 'underline' },
            }}
          >
            Uvjeti korištenja
          </Link>
        </Box>
        <Typography variant="body2" textAlign="center" sx={{ opacity: 0.8, mt: 2 }}>
          © 2025 DigiPort. Sva prava pridržana.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;