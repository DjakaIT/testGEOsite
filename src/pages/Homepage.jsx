import React from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import ReviewsSection from '../components/ReviewsSection';
import PromoBanner from '../components/PromoBanner'; // Import the new component
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import '../css/homepage.css';

function Homepage() {
  return (
    <Box sx={{ width: '100%', margin: 0, padding: 0 }}>
      <Seo 
        canonicalPath="/" 
        title="DigiPort Zadar - Profesionalni IT Servis Računala i Mobitela"
        description="DigiPort Zadar pruža profesionalni servis računala, laptopa i mobitela s više od 10 godina iskustva. Nudimo brze popravke, nadogradnje i IT podršku."
      />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ReviewsSection />
      <PromoBanner /> 
      <Footer />
    </Box>
  );
}

export default Homepage;