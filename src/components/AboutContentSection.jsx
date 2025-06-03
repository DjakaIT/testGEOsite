import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { Computer, People, Verified, LocalOffer } from '@mui/icons-material';

function AboutContentSection() {
  const features = [
    {
      icon: <Computer sx={{ fontSize: 50, color: '#27ae60' }} />,
      title: 'Više od 10 godina iskustva',
      description: 'Dugogodišnje iskustvo u radu s IT opremom svih vrsta'
    },
    {
      icon: <People sx={{ fontSize: 50, color: '#27ae60' }} />,
      title: 'Stručan tim',
      description: 'Certificirani tehničari s kontinuiranim usavršavanjem'
    },
    {
      icon: <Verified sx={{ fontSize: 50, color: '#27ae60' }} />,
      title: 'Garancija kvalitete',
      description: 'Jamčimo kvalitetu svih naših usluga i dijelova'
    },
    {
      icon: <LocalOffer sx={{ fontSize: 50, color: '#27ae60' }} />,
      title: 'Konkurentne cijene',
      description: 'Fer cijene bez skrivenih troškova'
    }
  ];

  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        {/* Main Content */}
        <Grid container spacing={8} sx={{ mb: 8 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700, color: '#2c3e50' }}>
              Tko smo mi?
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, fontSize: '1.1rem' }}>
              DigiPort je vodeći servis računala u Zadru s više od 10 godina iskustva. 
              Specijalizirani smo za popravak i održavanje svih vrsta IT opreme.
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, fontSize: '1.1rem' }}>
              Naš tim čine iskusni tehničari koji kontinuirano prate najnovije tehnologije 
              i trendove u IT industriji kako bi vašim uređajima pružili najbolju moguću skrb.
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
              Vjerujemo u transparentnost, kvalitetu i osobni pristup svakom klijentu.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
          
          </Grid>
        </Grid>

        {/* Features Grid */}
        <Typography variant="h4" component="h2" textAlign="center" gutterBottom sx={{ mb: 6, fontWeight: 700 }}>
          Zašto odabrati nas?
        </Typography>
        
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: '100%',
                  textAlign: 'center',
                  p: 3,
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
                    {feature.icon}
                  </Box>
                  <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default AboutContentSection;