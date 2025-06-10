import React from 'react';
import { Box, Container, Typography, Button, Link } from '@mui/material';
import { Launch } from '@mui/icons-material';

function PromoBanner() {
  return (
    <Box sx={{ 
      backgroundColor: '#f5f5f5',
      borderTop: '1px solid #e0e0e0',
      py: 5 
    }}>
      <Container maxWidth="lg">
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#fff', 
          p: 4,
          borderRadius: 2,
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
        }}>
          <Box sx={{ mb: { xs: 3, md: 0 }, maxWidth: { md: '60%' } }}>
            <Typography variant="h5" component="h3" sx={{ fontFamily: 'Inter, sans-serif', mb: 1 }}>
              Posjetite našu novu online trgovinu!
            </Typography>
            <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', color: 'text.secondary' }}>
              Istražite našu ponudu kvalitetnih računalnih komponenti, periferije i druge IT opreme. 
              Dostava na području cijele Hrvatske.
            </Typography>
          </Box>
          <Button 
            variant="contained"
            endIcon={<Launch />}
            component="a"
            href="https://shop.digiport.hr" 
            target="_blank"
            rel="noopener noreferrer sponsored"
            sx={{
              backgroundColor: '#667eea',
              fontFamily: 'Open Sans, sans-serif',
              '&:hover': { backgroundColor: '#5a6fd8' },
              px: 3,
              py: 1.2,
              textTransform: 'none'
            }}
          >
            Posjetite trgovinu
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default PromoBanner;