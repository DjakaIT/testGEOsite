import React from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import ContactHeroSection from '../components/ContactHeroSection';
import ContactInfoSection from '../components/ContactInfoSection';
import Footer from '../components/Footer';

function Contact() {
  return (
    <Box sx={{ width: '100%', margin: 0, padding: 0 }}>
      <Navbar />
      <ContactHeroSection />
      <ContactInfoSection />
      <Footer />
    </Box>
  );
}

export default Contact;