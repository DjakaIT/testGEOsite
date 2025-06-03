import React from 'react';
import { Rating } from '@mui/material';

function UserReviewRating({ rating }) {
  return (
    <Rating value={rating} readOnly size="small" />
  );
}

export default UserReviewRating;