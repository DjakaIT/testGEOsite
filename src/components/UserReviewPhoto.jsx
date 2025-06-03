import React from 'react';
import { Avatar } from '@mui/material';

function UserReviewPhoto({ name, avatar }) {
  return (
    <Avatar sx={{ bgcolor: '#667eea' }}>
      {avatar}
    </Avatar>
  );
}

export default UserReviewPhoto;