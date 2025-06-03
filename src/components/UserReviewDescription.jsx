import React from 'react';
import { Typography } from '@mui/material';

function UserReviewDescription({ review }) {
  return (
    <Typography 
      variant="body2" 
      sx={{ 
        fontStyle: 'italic',
        lineHeight: 1.4,
        overflow: 'hidden',
        display: '-webkit-box',
        WebkitLineClamp: 4,
        WebkitBoxOrient: 'vertical',
        textOverflow: 'ellipsis',
        minHeight: '80px',
        color: 'text.secondary'
      }}
    >
      "{review}"
    </Typography>
  );
}

export default UserReviewDescription;