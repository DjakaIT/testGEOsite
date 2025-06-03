import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button, Chip } from '@mui/material';
import {
  Memory,
  Storage,
  Mouse,
  Headphones,
  Usb,
  Cable,
  Router,
  Keyboard,
  Monitor,
  Speaker,
  Power,
  SdCard
} from '@mui/icons-material';

function SalesSection() {
  const productCategories = [
    {
      category: 'Memorijske komponente',
      icon: <Memory sx={{ fontSize: 30 }} />,
      products: [
        { name: 'DDR4 RAM memorija', price: 'Od 200 kn', stock: 'Na zalihi' },
        { name: 'DDR5 RAM memorija', price: 'Od 350 kn', stock: 'Na zalihi' },
        { name: 'SSD diskovi', price: 'Od 180 kn', stock: 'Na zalihi' },
        { name: 'HDD diskovi', price: 'Od 150 kn', stock: 'Na zalihi' }
      ]
    },
    {
      category: 'Periferija',
      icon: <Mouse sx={{ fontSize: 30 }} />,
      products: [
        { name: 'Bežični miševi', price: 'Od 50 kn', stock: 'Na zalihi' },
        { name: 'Gaming miševi', price: 'Od 120 kn', stock: 'Na zalihi' },
        { name: 'Bežične tipkovnice', price: 'Od 80 kn', stock: 'Na zalihi' },
        { name: 'Gaming tipkovnice', price: 'Od 200 kn', stock: 'Ograničeno' }
      ]
    },
    {
      category: 'Audio oprema',
      icon: <Headphones sx={{ fontSize: 30 }} />,
      products: [
        { name: 'Bluetooth slušalice', price: 'Od 100 kn', stock: 'Na zalihi' },
        { name: 'Gaming headset', price: 'Od 250 kn', stock: 'Na zalihi' },
        { name: 'PC zvučnici', price: 'Od 80 kn', stock: 'Na zalihi' },
        { name: 'Studio slušalice', price: 'Od 300 kn', stock: 'Po narudžbi' }
      ]
    },
    {
      category: 'Kablovi i adapteri',
      icon: <Cable sx={{ fontSize: 30 }} />,
      products: [
        { name: 'USB-C kablovi', price: 'Od 25 kn', stock: 'Na zalihi' },
        { name: 'HDMI kablovi', price: 'Od 30 kn', stock: 'Na zalihi' },
        { name: 'Ethernet kablovi', price: 'Od 20 kn', stock: 'Na zalihi' },
        { name: 'Punjači za laptop', price: 'Od 120 kn', stock: 'Na zalihi' }
      ]
    },
    {
      category: 'Mrežna oprema',
      icon: <Router sx={{ fontSize: 30 }} />,
      products: [
        { name: 'Wi-Fi routeri', price: 'Od 150 kn', stock: 'Na zalihi' },
        { name: 'Mrežni switchevi', price: 'Od 100 kn', stock: 'Na zalihi' },
        { name: 'USB Wi-Fi adapteri', price: 'Od 40 kn', stock: 'Na zalihi' },
        { name: 'Powerline adapteri', price: 'Od 180 kn', stock: 'Ograničeno' }
      ]
    },
    {
      category: 'USB i memorijske kartice',
      icon: <Usb sx={{ fontSize: 30 }} />,
      products: [
        { name: 'USB flash diskovi', price: 'Od 30 kn', stock: 'Na zalihi' },
        { name: 'MicroSD kartice', price: 'Od 40 kn', stock: 'Na zalihi' },
        { name: 'SD kartice', price: 'Od 50 kn', stock: 'Na zalihi' },
        { name: 'Eksterni diskovi', price: 'Od 200 kn', stock: 'Na zalihi' }
      ]
    }
  ];

  // ...existing code...
  const getStockColor = (stock) => {
    switch (stock) {
      case 'Na zalihi': return '#4caf50';
      case 'Ograničeno': return '#ff9800';
      case 'Po narudžbi': return '#f44336';
      default: return '#757575';
    }
  };

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Typography variant="h3" component="h2" textAlign="center" gutterBottom sx={{ mb: 2 }}>
          IT oprema i dijelovi
        </Typography>
        <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 6 }}>
          Kvalitetni proizvodi za sve vaše IT potrebe
        </Typography>
        
        <Grid container spacing={4}>
          {productCategories.map((category, categoryIndex) => (
            <Grid item xs={12} md={6} key={categoryIndex}>
              <Card
                sx={{
                  height: '100%',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
                  }
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Box sx={{ color: '#667eea', mr: 2 }}>
                      {category.icon}
                    </Box>
                    <Typography variant="h5" component="h3" sx={{ fontWeight: 600 }}>
                      {category.category}
                    </Typography>
                  </Box>
                  
                  <Box sx={{ mb: 3 }}>
                    {category.products.map((product, productIndex) => (
                      <Box
                        key={productIndex}
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          py: 1.5,
                          borderBottom: productIndex < category.products.length - 1 ? '1px solid #e0e0e0' : 'none'
                        }}
                      >
                        <Box sx={{ flex: 1 }}>
                          <Typography variant="body1" sx={{ fontWeight: 500 }}>
                            {product.name}
                          </Typography>
                          <Typography variant="body2" color="primary" sx={{ fontWeight: 600 }}>
                            {product.price}
                          </Typography>
                        </Box>
                        <Chip
                          label={product.stock}
                          size="small"
                          sx={{
                            backgroundColor: getStockColor(product.stock),
                            color: 'white',
                            fontWeight: 500,
                            minWidth: '90px'
                          }}
                        />
                      </Box>
                    ))}
                  </Box>
                  
                  <Button
                    variant="outlined"
                    fullWidth
                    sx={{
                      borderColor: '#667eea',
                      color: '#667eea',
                      '&:hover': {
                        borderColor: '#5a6fd8',
                        backgroundColor: 'rgba(102, 126, 234, 0.1)'
                      }
                    }}
                  >
                    Pogledaj sve proizvode
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        
        <Box sx={{ textAlign: 'center', mt: 6, p: 4, backgroundColor: '#f8f9fa', borderRadius: 2 }}>
          <Typography variant="h6" gutterBottom>
            Trebate nešto što nije na listi?
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Kontaktirajte nas za dostupnost specifičnih proizvoda ili veće narudžbe
          </Typography>
          <Button
            variant="contained"
            size="large"
            component="a"
            href="/kontakt"
            sx={{
              backgroundColor: '#667eea',
              '&:hover': { backgroundColor: '#5a6fd8' },
              px: 4,
              textDecoration: 'none'
            }}
          >
            Kontaktirajte nas
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default SalesSection;