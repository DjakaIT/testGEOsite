import React from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/NavbarTemp';
import HeroSectionSpecialized from '../components/HeroSectionSpecialized';
import SpecializedFixesSection from '../components/SpecializedFixesSection';
import SalesSection from '../components/SalesSection';
import Footer from '../components/Footer';

function SpecializedServices() {
  return (
    <Box sx={{ width: '100%', margin: 0, padding: 0 }}>
      <Navbar />
      <HeroSectionSpecialized />
      <SpecializedFixesSection />
      <SalesSection />
      <Footer />
    </Box>
  );
}

export default SpecializedServices;