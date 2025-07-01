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
      description: 'Brz odgovor na upite, komunikacija u vremenu od 8:00 do 20:00'
    }
  ];

  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Grid container spacing={8} direction="column">
          {/* Contact Methods - Full width section */}
          <Grid item xs={12}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 700, mb: 4 }}>
              Kako nas možete kontaktirati
            </Typography>
            
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  sm: 'repeat(3, 1fr)'
                },
                gap: 4,
                mb: 6
              }}
            >
              {contactMethods.map((method, index) => (
                <Card
                  key={index}
                  sx={{
                    height: '100%',         
                    minHeight: '200px',     
                    borderRadius: 3,
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
                    }
                  }}
                >
                  <CardContent
                    sx={{
                      p: 3,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'space-between', 
                      textAlign: 'center'
                    }}
                  >
                    <Box sx={{ mb: 2 }}>
                      {method.icon}
                    </Box>
                    
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                        {method.title}
                      </Typography>
                      <Typography variant="h6" color="primary" sx={{ mb: 1, fontWeight: 600 }}>
                        {method.info}
                      </Typography>
                    </Box>
                    
                    <Typography variant="body2" color="text.secondary">
                      {method.description}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>

            <Box 
              sx={{ 
                backgroundColor: '#f8f9fa', 
                p: 4, 
                borderRadius: 3,
                textAlign: 'center'
              }}
            >
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Potreban vam je popravak računala odmah?
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                Za hitne slučajeve možete nas nazvati ili poslati WhatsApp poruku
              </Typography>
              <Box 
                sx={{ 
                  display: 'flex', 
                  gap: 2, 
                  justifyContent: 'center', 
                  flexWrap: 'wrap'
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<Phone />}
                  sx={{
                    backgroundColor: '#e74c3c',
                    '&:hover': { backgroundColor: '#c0392b' }
                  }}
                >
                  Pozovite odmah
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<WhatsApp />}
                  sx={{
                    borderColor: '#25d366',
                    color: '#25d366',
                    '&:hover': { 
                      borderColor: '#1da851',
                      backgroundColor: 'rgba(37, 211, 102, 0.1)'
                    }
                  }}
                >
                  WhatsApp
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ width: '100%', maxWidth: '800px' }}> 
              <Card 
                sx={{ 
                  p: 4, 
                  borderRadius: 3, 
                  height: '100%'
                }}
              >
                <Typography variant="h5" component="h3" gutterBottom sx={{ 
                  fontWeight: 600, 
                  textAlign: 'center',
                  mb: 4
                }}>
                  <LocationOn sx={{ mr: 1, color: '#e74c3c', verticalAlign: 'middle' }} />
                  Lokacija i radno vrijeme
                </Typography>
                
                {/* Horizontal layout for address and hours */}
                <Box sx={{ 
                  display: 'flex', 
                  flexDirection: { xs: 'column', md: 'row' }, 
                  gap: 4,
                  mb: 4,
                  justifyContent: 'center'
                }}>
                  {/* Address Box */}
                  <Box sx={{ 
                    flex: 1, 
                    textAlign: { xs: 'center', md: 'left' },
                    px: 2,
                    borderRight: { xs: 'none', md: '1px solid #e0e0e0' }
                  }}>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                      <LocationOn sx={{ mr: 1, color: '#e74c3c', verticalAlign: 'middle' }} />
                      Adresa
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                      Zadar, Hrvatska<br />
                      (Točna adresa će biti dodana)
                    </Typography>
                  </Box>
                  
                  {/* Hours Box */}
                  <Box sx={{ 
                    flex: 1, 
                    textAlign: { xs: 'center', md: 'left' },
                    px: 2 
                  }}>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                      <Schedule sx={{ mr: 1, color: '#e74c3c', verticalAlign: 'middle' }} />
                      Radno vrijeme
                    </Typography>
                    <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                      <strong>Ponedjeljak - Petak:</strong> 08:00 - 20:00<br />
                      <strong>Subota:</strong> 09:00 - 15:00<br />
                      <strong>Nedjelja:</strong> Zatvoreno
                    </Typography>
                  </Box>
                </Box>

                <Box 
                  sx={{ 
                    backgroundColor: '#fff3cd', 
                    p: 2, 
                    borderRadius: 2,
                    borderLeft: '4px solid #ffc107',
                    width: '100%'
                  }}
                >
                  <Typography variant="body2" sx={{ fontWeight: 600, textAlign: 'center' }}>
                    💡 Savjet: Prije dolaska pozovite nas da provjerite dostupnost!
                  </Typography>
                </Box>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ContactInfoSection;