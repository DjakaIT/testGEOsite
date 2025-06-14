import React from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import ContactHeroSection from '../components/ContactHeroSection';
import ContactInfoSection from '../components/ContactInfoSection';
import Footer from '../components/Footer';
import Seo from '../components/Seo';

function Contact() {
  return (
    <Box sx={{ width: '100%', margin: 0, padding: 0 }}>
      <Seo 
        canonicalPath="/kontakt" 
        title="Kontakt | DigiPort IT Servis Zadar"
        description="Kontaktirajte DigiPort IT servis u Zadru za sve vaše potrebe popravka računala i mobitela. Dostupni smo radnim danom od 8 do 20h."
      />
      <Navbar />
      <ContactHeroSection />
      <ContactInfoSection />
      <Footer />
    </Box>
  );
}

export default Contact;