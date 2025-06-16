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

  // Create a rich content section to improve text-to-code ratio
  const seoContentSection = (
    <Box sx={{ mt: 8, mb: 6 }}>
      <Typography variant="h2" component="h2" gutterBottom>
        Stručni IT servis u Zadru
      </Typography>
      
      <Typography variant="body1" paragraph sx={{ mb: 2 }}>
        DigiPort je vodeći pružatelj IT usluga u Zadru s preko 10 godina iskustva. Naša stručnost u servisu računala, 
        laptopa i mobilnih uređaja osigurava vam brza i pouzdana rješenja za sve tehnološke probleme. Koristimo 
        najnovije alate i metode kako bismo dijagnosticirali i riješili širok spektar hardverskih i softverskih problema.
      </Typography>
      
      <Typography variant="body1" paragraph sx={{ mb: 2 }}>
        Naš tim tehničara kontinuirano se educira o najnovijim tehnologijama i trendovima kako bi vam mogao pružiti 
        vrhunsku uslugu. Ponosimo se našom sposobnošću rješavanja složenih IT problema, od uklanjanja virusa do 
        spašavanja podataka s oštećenih diskova. Naša strast prema tehnologiji i predanost zadovoljstvu klijenata 
        čine nas idealnim partnerom za sve vaše IT potrebe.
      </Typography>
      
      <Typography variant="h3" component="h3" gutterBottom sx={{ mt: 4, mb: 2 }}>
        Zašto klijenti biraju DigiPort?
      </Typography>
      
      <Typography variant="body1" paragraph sx={{ mb: 2 }}>
        Klijenti diljem Zadra i okolice odabiru DigiPort zbog naše reputacije za pouzdanost, stručnost i odlične cijene. 
        Razumijemo koliko je važno brzo riješiti tehnološke probleme, bilo da je riječ o osobnom računalu, poslovnom 
        laptopu ili pametnom telefonu. Naš cilj je minimizirati vrijeme prekida rada i osigurati optimalne performanse vaših uređaja.
      </Typography>
      
      <Typography variant="body1" paragraph sx={{ mb: 2 }}>
        Kroz godine, izgradili smo snažnu lokalnu zajednicu zadovoljnih klijenata koji cijene našu transparentnost, 
        poštene cijene i kvalitetu usluge. Ponosni smo na činjenicu da većina našeg poslovanja dolazi od preporuka 
        i povratnih klijenata, što govori o razini povjerenja koje smo izgradili u zadarskoj zajednici.
      </Typography>
      
      <Typography variant="h3" component="h3" gutterBottom sx={{ mt: 4, mb: 2 }}>
        Naša tehnička stručnost
      </Typography>
      
      <Typography variant="body1" paragraph sx={{ mb: 2 }}>
        DigiPort tim posjeduje široko tehničko znanje koje pokriva sve aspekte IT-a. Bilo da imate problema s računalom koje 
        se ne uključuje, sporim laptopom, razbijenim ekranom na mobitelu ili trebate savjet o nadogradnji sustava, naši 
        stručnjaci su tu da vam pomognu. Specijalizirani smo za dijagnostiku i rješavanje problema na svim popularnim 
        brendovima i modelima.
      </Typography>
      
      <Typography variant="body1" paragraph sx={{ mb: 2 }}>
        Naša tehnička stručnost uključuje popravak matičnih ploča na komponentnoj razini, spašavanje podataka s oštećenih 
        medija, optimizaciju performansi za gaming sustave, profesionalne instalacije mrežne opreme i sigurnosnih sustava. 
        Također nudimo usluge redovitog održavanja koje mogu produžiti životni vijek vaše opreme i spriječiti skupe kvarove.
      </Typography>
      
      <Typography variant="h3" component="h3" gutterBottom sx={{ mt: 4, mb: 2 }}>
        Naš pristup IT servisu
      </Typography>
      
      <Typography variant="body1" paragraph sx={{ mb: 4 }}>
        U DigiPortu vjerujemo u transparentan i pošten pristup IT servisu. Svaki postupak popravka započinjemo detaljnom 
        dijagnostikom problema, nakon čega vam predstavljamo jasnu procjenu troškova i vremena potrebnog za popravak. 
        Nikada ne preporučujemo nepotrebne popravke ili nadogradnje i uvijek tražimo najisplativije rješenje za vaš problem. 
        Naš cilj je izgraditi dugoročne odnose s klijentima temeljene na povjerenju i kvaliteti usluge.
      </Typography>
    </Box>
  );

  const seoRichContent = (
    <Box sx={{ mt: 8, mb: 6 }}>
      <Typography variant="h2" component="h2" gutterBottom>
        Stručni IT servis u Zadru
      </Typography>
      
      <Typography variant="body1" paragraph>
        DigiPort je vodeći pružatelj IT usluga u Zadru s preko 10 godina iskustva. Naša stručnost u servisu računala, 
        laptopa i mobilnih uređaja osigurava vam brza i pouzdana rješenja za sve tehnološke probleme. Koristimo 
        najnovije alate i metode kako bismo dijagnosticirali i riješili širok spektar hardverskih i softverskih problema.
      </Typography>
      
      <Typography variant="body1" paragraph>
        Naš tim tehničara kontinuirano se educira o najnovijim tehnologijama i trendovima kako bi vam mogao pružiti 
        vrhunsku uslugu. Ponosimo se našom sposobnošću rješavanja složenih IT problema, od uklanjanja virusa do 
        spašavanja podataka s oštećenih diskova.
      </Typography>
      
      <Typography variant="h3" component="h3" gutterBottom sx={{ mt: 4 }}>
        Zašto klijenti biraju DigiPort?
      </Typography>
      
      <Typography variant="body1" paragraph>
        Klijenti diljem Zadra i okolice odabiru DigiPort zbog naše reputacije za pouzdanost, stručnost i odlične cijene. 
        Razumijemo koliko je važno brzo riješiti tehnološke probleme, bilo da je riječ o osobnom računalu, poslovnom 
        laptopu ili pametnom telefonu.
      </Typography>
      
      <Typography variant="body1" paragraph>
        Kroz godine, izgradili smo snažnu lokalnu zajednicu zadovoljnih klijenata koji cijene našu transparentnost, 
        poštene cijene i kvalitetu usluge. Ponosni smo na činjenicu da većina našeg poslovanja dolazi od preporuka 
        i povratnih klijenata.
      </Typography>
      
      <Typography variant="h3" component="h3" gutterBottom sx={{ mt: 4 }}>
        Naša tehnička stručnost
      </Typography>
      
      <Typography variant="body1" paragraph>
        DigiPort tim posjeduje široko tehničko znanje koje pokriva sve aspekte IT-a. Bilo da imate problema s računalom koje 
        se ne uključuje, sporim laptopom, razbijenim ekranom na mobitelu ili trebate savjet o nadogradnji sustava, naši 
        stručnjaci su tu da vam pomognu.
      </Typography>
      
      <Typography variant="body1" paragraph>
        Naša tehnička stručnost uključuje popravak matičnih ploča na komponentnoj razini, spašavanje podataka s oštećenih 
        medija, optimizaciju performansi za gaming sustave, profesionalne instalacije mrežne opreme i sigurnosnih sustava.
      </Typography>
    </Box>
  );

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

      {/* Novi sadržaj za kvalitetu i SEO */}
      {seoRichContent}
    </Container>
  );
}

export default ServicesSection;