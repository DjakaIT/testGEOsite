import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Divider, Avatar, Stack } from '@mui/material';
import { Computer, People, Verified, LocalOffer, History, School, Star, Business, Security, EmojiEvents, Handshake, Public } from '@mui/icons-material';

function AboutContentSection() {
  const features = [
    {
      icon: <Computer sx={{ fontSize: 50, color: '#27ae60' }} />,
      title: 'Više od 10 godina iskustva',
      description: 'Dugogodišnje iskustvo u radu s IT opremom svih vrsta, od kućnih računala do poslovnih sustava.'
    },
    {
      icon: <People sx={{ fontSize: 50, color: '#27ae60' }} />,
      title: 'Stručan tim',
      description: 'Naši certificirani tehničari kontinuirano se usavršavaju i prate najnovije IT trendove.'
    },
    {
      icon: <Verified sx={{ fontSize: 50, color: '#27ae60' }} />,
      title: 'Garancija kvalitete',
      description: 'Jamčimo kvalitetu svih naših usluga i dijelova, uz transparentnu komunikaciju s klijentima.'
    },
    {
      icon: <LocalOffer sx={{ fontSize: 50, color: '#27ae60' }} />,
      title: 'Konkurentne cijene',
      description: 'Fer cijene bez skrivenih troškova i mogućnost dogovora za veće projekte.'
    }
  ];

  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Grid container spacing={8} sx={{ mb: 8 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700, color: '#2c3e50' }}>
              Naša priča i vrijednosti
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, fontSize: '1.1rem' }}>
              <History sx={{ verticalAlign: 'middle', color: '#27ae60', mr: 1 }} />
              <strong>Povijest:</strong> DigiPort je osnovan 2012. godine kao mali obiteljski servis u Zadru. Kroz godine smo rasli zahvaljujući povjerenju naših klijenata i stalnom ulaganju u znanje i opremu. Danas smo vodeći IT servis u regiji, poznat po brzini, stručnosti i prijateljskom pristupu.
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, fontSize: '1.1rem' }}>
              <School sx={{ verticalAlign: 'middle', color: '#27ae60', mr: 1 }} />
              <strong>Edukacija:</strong> Naš tim redovito sudjeluje na stručnim seminarima i IT konferencijama. Vjerujemo da je stalno učenje ključ za pružanje vrhunske usluge i savjetovanje klijenata o najnovijim tehnologijama.
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, fontSize: '1.1rem' }}>
              <Security sx={{ verticalAlign: 'middle', color: '#27ae60', mr: 1 }} />
              <strong>Povjerenje i sigurnost:</strong> Svi podaci i uređaji tretiraju se s maksimalnom pažnjom i diskrecijom. Naša politika privatnosti jamči sigurnost vaših informacija.
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, fontSize: '1.1rem' }}>
              <Handshake sx={{ verticalAlign: 'middle', color: '#27ae60', mr: 1 }} />
              <strong>Partnerstva:</strong> DigiPort surađuje s lokalnim školama, tvrtkama i institucijama poput ZadarTech, EduNet i Grada Zadra. Ponosni smo na doprinos digitalizaciji zajednice.
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, fontSize: '1.1rem' }}>
              <EmojiEvents sx={{ verticalAlign: 'middle', color: '#27ae60', mr: 1 }} />
              <strong>Nagrade i priznanja:</strong> Višestruko smo nagrađivani za izvrsnost u korisničkoj podršci i inovativnim rješenjima.
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
              <Public sx={{ verticalAlign: 'middle', color: '#27ae60', mr: 1 }} />
              <strong>Društvena odgovornost:</strong> Aktivno sudjelujemo u humanitarnim akcijama i projektima digitalne pismenosti za sve uzraste.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 700, color: '#2c3e50', mb: 3 }}>
              Naš tim i pristup
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
              Naš tim čine entuzijastični IT stručnjaci s bogatim iskustvom u popravku računala, laptopa, mobitela i mrežnih sustava. Svakom klijentu pristupamo individualno, nudeći rješenja prilagođena stvarnim potrebama.
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
              <Star sx={{ verticalAlign: 'middle', color: '#27ae60', mr: 1 }} />
              <strong>Naša misija:</strong> Omogućiti svakom korisniku brz, pouzdan i pristupačan servis, uz edukaciju i savjetovanje o sigurnosti i održavanju uređaja.
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
              <Business sx={{ verticalAlign: 'middle', color: '#27ae60', mr: 1 }} />
              <strong>Za poslovne korisnike:</strong> Nudimo održavanje IT infrastrukture, brzu intervenciju i savjetovanje za optimizaciju poslovanja.
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
              <People sx={{ verticalAlign: 'middle', color: '#27ae60', mr: 1 }} />
              <strong>Za privatne korisnike:</strong> Pomažemo u svakodnevnim izazovima, od spašavanja podataka do optimizacije performansi i zaštite od virusa.
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 6 }} />

        <Typography variant="h3" component="h2" textAlign="center" gutterBottom sx={{ mb: 6, fontWeight: 700 }}>
          Zašto odabrati nas?
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)'
            },
            gap: 4,
            alignItems: 'stretch'
          }}
        >
          {features.map((feature, index) => (
            <Card
              key={index}
              sx={{
                height: '100%',
                minHeight: '240px',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 3,
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
                }
              }}
            >
              <CardContent
                sx={{
                  p: 3,
                  textAlign: 'center',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <Box sx={{ mb: 3 }}>
                  {feature.icon}
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    component="h3"
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      minHeight: '52px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      lineHeight: 1.5
                    }}
                  >
                    {feature.description}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>

        <Divider sx={{ my: 6 }} />

        <Typography variant="h4" component="h2" textAlign="center" gutterBottom sx={{ fontWeight: 700, mb: 4 }}>
          Iskustva naših klijenata
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Card sx={{ p: 2, height: '100%' }}>
              <CardContent>
                <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                  <Avatar sx={{ bgcolor: '#27ae60' }}>IK</Avatar>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Ivana K. - vlasnica obrta</Typography>
                </Stack>
                <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
                  "DigiPort je spasio sve moje podatke nakon što mi je disk otkazao! Brzi, profesionalni i ljubazni."
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ p: 2, height: '100%' }}>
              <CardContent>
                <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                  <Avatar sx={{ bgcolor: '#27ae60' }}>OŠ</Avatar>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>OŠ Preradović Zadar</Typography>
                </Stack>
                <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
                  "Suradnja s DigiPortom na projektu digitalizacije škole bila je izvrsna. Preporučujem ih svima!"
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ p: 2, height: '100%' }}>
              <CardContent>
                <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                  <Avatar sx={{ bgcolor: '#27ae60' }}>MP</Avatar>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Niko Kovač - profesionalni eSports igrač. </Typography>
                </Stack>
                <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
                  "Moj gaming PC sada radi bolje nego ikad zahvaljujući optimizaciji i čišćenju."
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default AboutContentSection;