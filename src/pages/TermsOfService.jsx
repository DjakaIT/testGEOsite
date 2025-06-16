import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function TermsOfService() {
  return (
    <Box>
      <Navbar />
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Typography variant="h1" component="h1" gutterBottom>
          Uvjeti korištenja
        </Typography>
        <Typography variant="body1" paragraph>
          Korištenjem ove web stranice prihvaćate uvjete korištenja. DigiPort zadržava pravo izmjene uvjeta u bilo kojem trenutku. Za sva pitanja kontaktirajte nas na info@digiport.hr.
        </Typography>
      </Container>
      <Footer />
    </Box>
  );
}
export default TermsOfService;