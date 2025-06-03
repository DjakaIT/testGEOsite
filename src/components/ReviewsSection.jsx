import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import ReviewCard from './ReviewCard';

function ReviewsSection() {
  const reviews = [
    {
      name: 'Marko Petrović',
      rating: 5,
      review: 'Odličan servis! Moj laptop je popravljen za samo jedan dan. Preporučujem svima!',
      avatar: 'MP'
    },
    {
      name: 'Ana Horvat',
      rating: 5,
      review: 'Vrlo profesionalno osoblje i fer cijene. DigiPort je najbolji izbor u Zadru.',
      avatar: 'AH'
    },
    {
      name: 'Tomislav Božić',
      rating: 5,
      review: 'Brza usluga i kvalitetan rad. Računalo radi kao novo!',
      avatar: 'TB'
    }
  ];

  return (
    <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" textAlign="center" gutterBottom sx={{ mb: 6 }}>
          Što kažu naši klijenti
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
          {reviews.map((review, index) => (
            <Box key={index} sx={{ display: 'flex' }}>
              <ReviewCard 
                name={review.name}
                rating={review.rating}
                review={review.review}
                avatar={review.avatar}
              />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default ReviewsSection;