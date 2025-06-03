import React from 'react';
import { Paper, Box } from '@mui/material';
import UserReviewPhoto from './UserReviewPhoto';
import UserReviewName from './UserReviewName';
import UserReviewRating from './UserReviewRating';
import UserReviewDescription from './UserReviewDescription';

function ReviewCard({ name, rating, review, avatar }) {
  return (
    <Paper
      elevation={3}
      sx={{
        width: '100%',
        minHeight: '220px',
        maxHeight: '220px',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 2,
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-3px)',
          boxShadow: '0 6px 20px rgba(0,0,0,0.12)'
        }
      }}
    >
      <Box 
        sx={{ 
          p: 3,
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'space-between'
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Box sx={{ mr: 2 }}>
            <UserReviewPhoto name={name} avatar={avatar} />
          </Box>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <UserReviewName name={name} />
            <UserReviewRating rating={rating} />
          </Box>
        </Box>
        <Box sx={{ flex: 1, display: 'flex', alignItems: 'center' }}>
          <UserReviewDescription review={review} />
        </Box>
      </Box>
    </Paper>
  );
}

export default ReviewCard;