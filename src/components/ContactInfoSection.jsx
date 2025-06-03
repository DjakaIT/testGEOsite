import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { LocationOn, Phone, Email, Schedule, WhatsApp } from '@mui/icons-material';

function ContactInfoSection() {
  const contactMethods = [
    {
      icon: <Phone sx={{ fontSize: 40, color: '#e74c3c' }} />,
      title: 'Telefon',
      info: '+385 23 123 456',
      description: 'Pozovite nas radnim danom'
    },
    {
      icon: <Email sx={{ fontSize: 40, color: '#e74c3c' }} />,
      title: 'Email',
      info: 'info@digiport.hr',
      description: 'Odgovaramo u roku 24h'
    },
    {
      icon: <WhatsApp sx={{ fontSize: 40, color: '#e74c3c' }} />,
      title: 'WhatsApp',
      info: '+385 99 123 456',
      description: 'Brze poruke i slike problema'
    }
  ];

  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Grid container spacing={8}>
          {/* Contact Methods */}
          <Grid item xs={12} md={8}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 700, mb: 4 }}>
              Kako nas možete kontaktirati
            </Typography>
            
            <Grid container spacing={4} sx={{ mb: 6 }}>
              {contactMethods.map((method, index) => (
                <Grid item xs={12} sm={4} key={index}>
                  <Card
                    sx={{
                      textAlign: 'center',
                      p: 3,
                      height: '100%',
                      borderRadius: 3,
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
                      }
                    }}
                  >
                    <CardContent>
                      <Box sx={{ mb: 2 }}>
                        {method.icon}
                      </Box>
                      <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                        {method.title}
                      </Typography>
                      <Typography variant="h6" color="primary" sx={{ mb: 1, fontWeight: 600 }}>
                        {method.info}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {method.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>


          </Grid>

          {/* Location & Hours */}
          <Grid item xs={12} md={4}>
            <Card sx={{ p: 4, borderRadius: 3, height: 'fit-content' }}>
              <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                <LocationOn sx={{ mr: 1, verticalAlign: 'middle', color: '#e74c3c' }} />
                Lokacija i radno vrijeme
              </Typography>
              
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Adresa
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  Zadar, Hrvatska<br />
                  (Točna adresa će biti dodana)
                </Typography>
              </Box>

              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  <Schedule sx={{ mr: 1, verticalAlign: 'middle', color: '#e74c3c' }} />
                  Radno vrijeme
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 2 }}>
                  <strong>Ponedjeljak - Petak:</strong><br />
                  08:00 - 20:00<br />
                  <strong>Subota:</strong><br />
                  09:00 - 15:00<br />
                  <strong>Nedjelja:</strong><br />
                  Zatvoreno
                </Typography>
              </Box>

              <Box 
                sx={{ 
                  backgroundColor: '#fff3cd', 
                  p: 2, 
                  borderRadius: 2,
                  borderLeft: '4px solid #ffc107'
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  💡 Savjet: Prije dolaska pozovite nas da provjerite dostupnost!
                </Typography>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ContactInfoSection;