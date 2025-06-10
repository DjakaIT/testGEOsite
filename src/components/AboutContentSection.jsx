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
         
        </Grid>

        {/* Features Grid - FIXED LAYOUT */}
        <Typography variant="h3" component="h2" textAlign="center" gutterBottom sx={{ mb: 6, fontWeight: 700 }}>
          Zašto odabrati nas?
        </Typography>
        
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',                    // 1 column on mobile
              sm: 'repeat(2, 1fr)',         // 2 columns on tablet
              md: 'repeat(4, 1fr)'          // 4 columns on desktop
            },
            gap: 4,                         // Consistent gap between cards
            alignItems: 'stretch'           // Stretch cards to equal height
          }}
        >
          {features.map((feature, index) => (
            <Card
              key={index}
              sx={{
                height: '100%',
                minHeight: '240px',         // Fixed minimum height for consistency
                display: 'flex',            // Use flexbox for internal layout
                flexDirection: 'column',    // Stack content vertically
                borderRadius: 3,            // Consistent rounded corners
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
                }
              }}
            >
              <CardContent 
                sx={{ 
                  p: 3,                     // Consistent padding
                  textAlign: 'center',      // Center text
                  height: '100%',           // Take up full height
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'  // Space content evenly
                }}
              >
                <Box sx={{ mb: 3 }}>
                  {feature.icon}
                </Box>
                <Box>
                  <Typography 
                    variant="h6" 
                    component="h3" 
                    gutterBottom 
                    sx={{ 
                      fontWeight: 600,
                      minHeight: '52px',    // Fixed height for title area
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{
                      lineHeight: 1.5      // Consistent line height
                    }}
                  >
                    {feature.description}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default AboutContentSection;