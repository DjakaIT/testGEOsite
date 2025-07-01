import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Get current path to determine active page
  const currentPath = window.location.pathname;

  const menuItems = [
    { label: 'Početna', href: '/' },
    { label: 'Usluge', href: '/usluge' },
    { label: 'O nama', href: '/o-nama' },
    { label: 'Kontakt', href: '/kontakt' }
  ];

  // Helper function to check if a menu item is active
  const isActive = (href) => {
    if (href === '/' && currentPath === '/') {
      return true;
    }
    return href !== '/' && currentPath === href;
  };

  const drawer = (
    <Box sx={{ width: 250, pt: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 2, mb: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#667eea' }}>
          DigiPort
        </Typography>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.label} 
            component="a" 
            href={item.href}
            onClick={handleDrawerToggle}
            sx={{
              '&:hover': {
                backgroundColor: 'rgba(102, 126, 234, 0.1)'
              }
            }}
          >
            <ListItemText 
              primary={item.label}
              sx={{
                '& .MuiListItemText-primary': {
                  fontWeight: isActive(item.href) ? 600 : 400,
                  color: isActive(item.href) ? '#667eea' : 'inherit'
                }
              }}
            />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="sticky" 
        sx={{ 
          backgroundColor: 'white',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          borderBottom: '1px solid #e0e0e0'
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, sm: 3, md: 4 } }}>
          {/* Logo */}
          <Typography
            variant="h5"
            component="a"
            href="/"
            sx={{
              fontFamily: 'Open Sans, sans-serif',
              fontWeight: 'bold',
              color: '#667eea',
              textDecoration: 'none',
              fontSize: { xs: '1.5rem', md: '1.8rem' },
              '&:hover': {
                color: '#5a6fd8'
              }
            }}
          >
            DigiPort
          </Typography>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 1 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.label}
                  component="a"
                  href={item.href}
                  sx={{
                    fontFamily: 'Open Sans, sans-serif',
                    color: isActive(item.href) ? '#667eea' : '#333',
                    fontWeight: isActive(item.href) ? 600 : 500,
                    fontSize: '1rem',
                    textTransform: 'none',
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    position: 'relative',
                    '&:hover': {
                      backgroundColor: 'rgba(102, 126, 234, 0.1)',
                      color: '#667eea'
                    },
                    '&::after': isActive(item.href) ? {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '60%',
                      height: '2px',
                      backgroundColor: '#667eea',
                      borderRadius: '1px'
                    } : {}
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ color: '#667eea' }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, 
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 250,
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

export default Navbar;