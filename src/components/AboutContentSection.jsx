import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { Computer, People, Verified, LocalOffer } from '@mui/icons-material';

function AboutContentSection() {
  const features = [
    {
      icon: <Computer sx={{ fontSize: 50, color: '#27ae60' }} />,
      title: 'Više od 10 godina iskustva',
      description: 'Dugogodišnje iskustvo u radu s IT opremom svih vrsta'
    },
    {
      icon: <People sx={{ fontSize: 50, color: '#27ae60' }} />,
      title: 'Stručan tim',
      description: 'Certificirani tehničari s kontinuiranim usavršavanjem'
    },
    {
      icon: <Verified sx={{ fontSize: 50, color: '#27ae60' }} />,
      title: 'Garancija kvalitete',
      description: 'Jamčimo kvalitetu svih naših usluga i dijelova'
    },
    {
      icon: <LocalOffer sx={{ fontSize: 50, color: '#27ae60' }} />,
      title: 'Konkurentne cijene',
      description: 'Fer cijene bez skrivenih troškova'
    }
  ];

  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        {/* Main Content */}
        <Grid container spacing={8} sx={{ mb: 8 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700, color: '#2c3e50' }}>
              Tko smo mi?
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, fontSize: '1.1rem' }}>
              DigiPort je vodeći servis računala u Zadru s više od 10 godina iskustva. Naš tim čine iskusni i certificirani tehničari koji su posvećeni pružanju vrhunske IT podrške. Kroz godine smo surađivali s brojnim lokalnim tvrtkama, školama i institucijama, uključujući ZadarTech, EduNet i Grad Zadar. Naša misija je omogućiti svakom korisniku brz, pouzdan i pristupačan servis, bilo da se radi o popravku računala, spašavanju podataka ili savjetovanju oko kupnje nove opreme.
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, fontSize: '1.1rem' }}>
              Povijest DigiPorta započinje 2012. godine kao mali obiteljski servis. Danas smo prepoznati kao partner od povjerenja za više od 5000 zadovoljnih klijenata. Naši tehničari redovito sudjeluju na IT konferencijama i edukacijama kako bi ostali u korak s najnovijim tehnologijama i trendovima.
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, fontSize: '1.1rem' }}>
              Naše vrijednosti su transparentnost, edukacija korisnika i stalno usavršavanje. Vjerujemo da je svaki problem rješiv uz pravi pristup i komunikaciju s klijentom.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {features.map((feature, idx) => (
                <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  {feature.icon}
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>{feature.title}</Typography>
                    <Typography variant="body2">{feature.description}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* Partnerships & Legal */}
        <Grid container spacing={8} sx={{ mb: 8 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
              Naši partneri i suradnje
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              DigiPort je ponosni partner tvrtki <strong>ZadarTech</strong>, <strong>EduNet</strong> i <strong>Grad Zadar</strong>. Kroz ove suradnje pružamo podršku školama, poduzetnicima i javnim ustanovama u Zadru i okolici.
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Član smo Hrvatske Udruge IT Servisera i sudjelujemo u projektima digitalne pismenosti.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
              Pravna sigurnost i transparentnost
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Vaša privatnost nam je važna. Pročitajte naša <a href="/privatnost">pravila privatnosti</a> i <a href="/uvjeti-koristenja">uvjete korištenja</a>. DigiPort posluje u skladu sa svim važećim zakonima Republike Hrvatske.
            </Typography>
          </Grid>
        </Grid>

        {/* Testimonials */}
        <Box sx={{ my: 8 }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
            Iskustva naših klijenata
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            "DigiPort je spasio sve moje podatke nakon što mi je disk otkazao! Brzi, profesionalni i ljubazni." – <strong>Ivana K.</strong>
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            "Suradnja s DigiPortom na projektu digitalizacije škole bila je izvrsna. Preporučujem ih svima!" – <strong>OŠ Zadar</strong>
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            "Moj gaming PC sada radi bolje nego ikad zahvaljujući optimizaciji i čišćenju." – <strong>Marko P.</strong>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default AboutContentSection;