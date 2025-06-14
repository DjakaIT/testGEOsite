import React from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import AboutHeroSection from '../components/AboutHeroSection';
import AboutContentSection from '../components/AboutContentSection';
import Footer from '../components/Footer';
import Seo from '../components/Seo';

function AboutUs() {
  return (
    <Box sx={{ width: '100%', margin: 0, padding: 0 }}>
      <Seo 
        canonicalPath="/o-nama" 
        title="O DigiPort Servisu | IT Stručnjaci u Zadru"
        description="DigiPort je vodeći IT servis u Zadru s više od 10 godina iskustva u popravku računala, laptopa i mobitela. Upoznajte naš stručni tim."
      />
      <Navbar />
      <AboutHeroSection />
      <AboutContentSection />
      <Footer />
    </Box>
  );
}

export default AboutUs;