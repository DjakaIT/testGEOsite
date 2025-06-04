import React from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/NavbarTemp';
import AboutHeroSection from '../components/AboutHeroSection';
import AboutContentSection from '../components/AboutContentSection';
import Footer from '../components/Footer';

function AboutUs() {
  return (
    <Box sx={{ width: '100%', margin: 0, padding: 0 }}>
      <Navbar />
      <AboutHeroSection />
      <AboutContentSection />
      <Footer />
    </Box>
  );
}

export default AboutUs;