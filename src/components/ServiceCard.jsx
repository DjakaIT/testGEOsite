import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

function ServiceCard({ icon, title, description }) {
  return (
    <Card
      sx={{
        width: '100%',
        minHeight: '280px',
        maxHeight: '280px',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
        }
      }}
    >
      <CardContent 
        sx={{ 
          textAlign: 'center', 
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'space-between'
        }}
      >
        <Box>
          <Box sx={{ color: '#667eea', mb: 2 }}>
            {icon}
          </Box>
          <Typography 
            variant="h6" 
            component="h3" 
            gutterBottom
            sx={{
              minHeight: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mb: 2
            }}
          >
            {title}
          </Typography>
        </Box>
        <Typography 
          variant="body2" 
          color="text.secondary"
          sx={{
            lineHeight: 1.5,
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            textOverflow: 'ellipsis',
            minHeight: '60px'
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ServiceCard;