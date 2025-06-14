import React from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import HeroSectionSpecialized from '../components/HeroSectionSpecialized';
import SpecializedFixesSection from '../components/SpecializedFixesSection';
import SalesSection from '../components/SalesSection';
import Footer from '../components/Footer';
import Seo from '../components/Seo';

function SpecializedServices() {
  return (
    <Box sx={{ width: '100%', margin: 0, padding: 0 }}>
      <Seo 
        canonicalPath="/usluge" 
        title="Specijalizirane IT Usluge | DigiPort Zadar"
        description="DigiPort nudi profesionalne specijalizirane IT usluge i prodaju računalne opreme u Zadru. Data recovery, popravak matičnih ploča i ugradnja naprednih komponenti."
      />
      <Navbar />
      <HeroSectionSpecialized />
      <SpecializedFixesSection />
      <SalesSection />
      <Footer />
    </Box>
  );
}

export default SpecializedServices;