import React from 'react';
import { Container, Typography, Grid, Box, Card, CardContent, Button, Divider } from '@mui/material';
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
      <Typography variant="h2" component="h2" textAlign="center" gutterBottom sx={{ mb: 2 }}>
        Naše usluge
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 6, maxWidth: '800px', mx: 'auto', textAlign: 'center' }}>
        DigiPort nudi širok spektar IT usluga za privatne korisnike i tvrtke. Naši stručnjaci su specijalizirani
        za različite aspekte računalne tehnologije, od osnovnog održavanja do naprednih popravaka.
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
          alignItems: 'stretch',
          mb: 8
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
      
      {/* Dodatni sadržaj za kvalitetu i SEO */}
      <Typography variant="h3" component="h3" sx={{ mb: 3, mt: 6 }}>
        Zašto odabrati DigiPort?
      </Typography>
      <Divider sx={{ mb: 4 }} />
      <Grid container spacing={4} sx={{ mb: 6 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" sx={{ mb: 2 }}>
            <strong>Stručna dijagnostika</strong> - Naš proces započinje temeljitom dijagnostikom problema. 
            Koristimo najsuvremenije alate za precizno utvrđivanje uzroka kvara, što nam omogućuje da ponudimo 
            najučinkovitija rješenja.
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            <strong>Kvalitetni dijelovi</strong> - Pri zamjeni komponenti koristimo samo provjerene dijelove koji 
            osiguravaju pouzdanost i dugovječnost vaših uređaja. Naše partnerstvo s vodećim dobavljačima 
            omogućuje nam pristup originalnim i visokokvalitetnim zamjenskim dijelovima.
          </Typography>
          <Typography variant="body1">
            <strong>Transparentne cijene</strong> - Vjerujemo u potpunu transparentnost poslovanja. Prije početka 
            rada dobivate detaljnu procjenu troškova bez skrivenih naknada. Naši cijenovni modeli su 
            konkurentni i prilagođeni različitim budžetima.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" sx={{ mb: 2 }}>
            <strong>Brza usluga</strong> - Razumijemo koliko je važno brzo vratiti vaš uređaj u funkciju. 
            Većinu popravaka obavljamo unutar 24-48 sati, a za hitne slučajeve nudimo i ekspresne usluge.
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            <strong>Jamstvo na usluge</strong> - Svi naši popravci dolaze s jamstvom, što odražava našu 
            predanost kvaliteti i zadovoljstvu klijenata. U slučaju da se problem ponovi unutar jamstvenog 
            roka, riješit ćemo ga bez dodatnih troškova.
          </Typography>
          <Typography variant="body1">
            <strong>Osobni pristup</strong> - Svaki klijent je za nas jedinstven. Posvećujemo pažnju 
            vašim specifičnim potrebama i pružamo prilagođena rješenja koja najbolje odgovaraju vašim 
            zahtjevima i budžetu.
          </Typography>
        </Grid>
      </Grid>
      
      <Box sx={{ mt: 6, mb: 3, textAlign: 'center' }}>
        <Typography variant="h3" component="h3" gutterBottom>
          Proces servisiranja
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, maxWidth: '700px', mx: 'auto' }}>
          U DigiPortu pratimo strukturiran pristup servisu kako bismo osigurali najbolje rezultate
        </Typography>
      </Box>
      
      <Grid container spacing={3} sx={{ mb: 6 }}>
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" component="h4" gutterBottom>
                1. Dijagnostika
              </Typography>
              <Typography variant="body2">
                Temeljita analiza problema korištenjem specijaliziranih alata i softvera za dijagnostiku.
                Utvrđujemo točan uzrok kvara, što nam omogućuje precizan pristup popravku.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" component="h4" gutterBottom>
                2. Procjena troškova
              </Typography>
              <Typography variant="body2">
                Detaljno objašnjavanje potrebnih radova i materijala te transparentan prikaz svih troškova.
                Procjena je neobavezna i potpuno besplatna.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" component="h4" gutterBottom>
                3. Popravak i testiranje
              </Typography>
              <Typography variant="body2">
                Stručni popravak od strane certificiranih tehničara i temeljito testiranje uređaja prije
                povratka klijentu kako bismo osigurali potpunu funkcionalnost.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      
      <Box sx={{ textAlign: 'center' }}>
        <Button
          variant="contained"
          size="large"
          component="a"
          href="/usluge"
          sx={{
            backgroundColor: '#667eea',
            '&:hover': { backgroundColor: '#5a6fd8' },
            px: 4,
            py: 1.5,
            fontSize: '1.1rem'
          }}
        >
          Saznajte više o našim uslugama
        </Button>
      </Box>
    </Container>
  );
}

export default ServicesSection;