import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import {
  Computer,
  PhoneIphone,
  Laptop,
  Memory,
  Security,
  Build
} from '@mui/icons-material';
import ServiceCard from './ServiceCard';

function ServicesSection() {
    const services = [
        {
            icon: <Computer sx={{ fontSize: 40 }} />,
            title: 'Popravak računala',
            description: 'Brzi i pouzdan popravak desktop računala svih brendova'
        },
        {
            icon: <Memory sx={{ fontSize: 40 }} />,
            title: 'Nadogradnja hardware-a',
            description: 'Povećanje performansi vašeg uređaja novim komponentama'
        },
        {
            icon: <Laptop sx={{ fontSize: 40 }} />,
            title: 'Servis laptopa',
            description: 'Profesionalni servis prijenosnih računala i zamjena dijelova'
        },
        {
            icon: <PhoneIphone sx={{ fontSize: 40 }} />,
            title: 'Popravak mobitela',
            description: 'Zamjena ekrana, baterija i ostali popravci pametnih telefona'
        },
    {
      icon: <Security sx={{ fontSize: 40 }} />,
      title: 'Uklanjanje virusa',
      description: 'Čišćenje sistema od malware-a i virusa'
    },
    {
      icon: <Build sx={{ fontSize: 40 }} />,
      title: 'Održavanje sistema',
      description: 'Redovito održavanje i optimizacija performansi'
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" component="h2" textAlign="center" gutterBottom sx={{ mb: 6 }}>
        Naše usluge
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)'
          },
          gap: 4,
          alignItems: 'stretch'
        }}
      >
        {services.map((service, index) => (
          <Box key={index} sx={{ display: 'flex' }}>
            <ServiceCard 
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          </Box>
        ))}
      </Box>
    </Container>
  );
}

export default ServicesSection;