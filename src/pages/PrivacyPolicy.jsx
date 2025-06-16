import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function PrivacyPolicy() {
  return (
    <Box>
      <Navbar />
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Typography variant="h1" component="h1" gutterBottom>
          Pravila privatnosti
        </Typography>
        <Typography variant="body1" paragraph>
          Vaša privatnost nam je važna. DigiPort prikuplja samo osnovne podatke potrebne za pružanje usluge i nikada ih ne dijeli s trećim stranama bez vašeg pristanka. Za sva pitanja kontaktirajte nas na info@digiport.hr.
        </Typography>
      </Container>
      <Footer />
    </Box>
  );
}
export default PrivacyPolicy;