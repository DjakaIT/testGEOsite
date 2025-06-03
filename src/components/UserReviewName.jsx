import React from 'react';
import { Typography } from '@mui/material';

function UserReviewName({ name }) {
  return (
    <Typography 
      variant="h6"
      sx={{
        fontSize: '1rem',
        fontWeight: 600,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        maxWidth: '150px',
        minHeight: '24px',
        lineHeight: '24px'
      }}
    >
      {name}
    </Typography>
  );
}

export default UserReviewName;