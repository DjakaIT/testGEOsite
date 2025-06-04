import React from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import ReviewsSection from '../components/ReviewsSection';
import Footer from '../components/Footer';
import '../css/homepage.css';

function Homepage() {
  return (
    <Box sx={{ width: '100%', margin: 0, padding: 0 }}>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ReviewsSection />
      <Footer />
    </Box>
  );
}

export default Homepage;