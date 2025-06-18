import React from 'react';
import { Container, Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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

      {/* Modern FAQ Section */}
      <Container maxWidth="md" sx={{ my: 8 }}>
        <Typography variant="h2" component="h2" gutterBottom sx={{ fontWeight: 700, textAlign: 'center', mb: 4, fontSize: { xs: '1.1rem', md: '1.25rem' }  }}>
          Najčešća pitanja o specijaliziranim IT uslugama u Zadru
        </Typography>
        <Box>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="faq1-content" id="faq1-header">
              <Typography variant="h3" component="h3" sx={{ fontWeight: 500, fontSize: { xs: '1.1rem', md: '1.25rem' }   }}>
                Kako izgleda proces spašavanja podataka s oštećenog SSD-a ili HDD-a u Zadru?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Proces <strong>spašavanja podataka u Zadru</strong> započinje besplatnom dijagnostikom vašeg SSD-a ili HDD-a. Naši stručnjaci koriste napredne alate za oporavak podataka i mogu vratiti izgubljene dokumente, slike i druge datoteke čak i s teško oštećenih diskova. Većinu spašavanja podataka obavljamo u vlastitom laboratoriju u Zadru, što jamči brzinu i sigurnost vaših informacija. Ako ste izgubili podatke, preporučujemo da odmah prestanete koristiti uređaj i kontaktirate naš <a href="/kontakt" style={{ color: '#667eea', textDecoration: 'underline' }}>servis za spašavanje podataka u Zadru</a>.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="faq2-content" id="faq2-header">
              <Typography variant="h3" component="h3" sx={{ fontWeight: 500, fontSize: { xs: '1.1rem', md: '1.25rem' }   }}>
                Nudite li popravak matičnih ploča za laptop i desktop računala u Zadru?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Da, <strong>popravak matičnih ploča u Zadru</strong> jedna je od naših najtraženijih specijaliziranih usluga. Vršimo mikrolemljenje, zamjenu komponenti i dijagnostiku kvarova na matičnim pločama svih brendova. Naš tim ima iskustva s rješavanjem problema poput nepaljenja računala, problema s napajanjem i kvarova na BIOS-u. Za više informacija ili narudžbu popravka, posjetite našu stranicu <a href="/usluge" style={{ color: '#667eea', textDecoration: 'underline' }}>specijaliziranih IT usluga u Zadru</a>.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="faq3-content" id="faq3-header">
              <Typography variant="h3" component="h3" sx={{ fontWeight: 500, fontSize: { xs: '1.1rem', md: '1.25rem' }   }}>
                Koliko traje zamjena ekrana na mobitelu ili laptopu u DigiPort servisu Zadar?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <strong>Zamjena ekrana mobitela ili laptopa u Zadru</strong> u našem servisu najčešće traje od 1 do 2 radna dana, ovisno o dostupnosti dijelova. Za popularne modele ekrane imamo na zalihi i zamjena je moguća isti dan. Koristimo samo provjerene i kvalitetne zamjenske dijelove, a na svaki popravak dajemo jamstvo. Za hitne slučajeve nudimo ekspresnu uslugu zamjene ekrana.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="faq4-content" id="faq4-header">
              <Typography variant="h3" component="h3" sx={{ fontWeight: 500, fontSize: { xs: '1.1rem', md: '1.25rem' }   }}>
                Koje su prednosti profesionalnog dubinskog čišćenja računala u Zadru?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <strong>Dubinsko čišćenje računala u Zadru</strong> uklanja prašinu i nečistoće iz unutrašnjosti računala, što poboljšava hlađenje i produžuje životni vijek komponenti. Naš servis koristi specijalizirane alate za čišćenje ventilatora, hladnjaka i matične ploče. Redovito čišćenje smanjuje rizik od pregrijavanja i kvarova, a preporučuje se barem jednom godišnje, osobito ako se računalo koristi u prašnjavom okruženju.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="faq5-content" id="faq5-header">
              <Typography variant="h3" component="h3" sx={{ fontWeight: 500, fontSize: { xs: '1.1rem', md: '1.25rem' }   }}>
                Kako mogu naručiti specijaliziranu IT uslugu ili savjetovanje u Zadru?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Naručiti <strong>specijaliziranu IT uslugu u Zadru</strong> možete putem naše <a href="/kontakt" style={{ color: '#667eea', textDecoration: 'underline' }}>kontakt stranice</a>, telefonom ili WhatsApp porukom. Naš tim odgovara na upite u roku od 24 sata i nudi besplatno savjetovanje za sve vrste IT problema. Također, možete nas posjetiti osobno u našem servisu u Zadru i dobiti stručnu procjenu na licu mjesta.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}

export default SpecializedServices;