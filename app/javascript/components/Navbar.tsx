import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// import Link from "@mui/material/Link";
import { ReactSession } from 'react-client-session';

const Navbar = () => {
  const currentUser = ReactSession.get("currentUserEmail");
  console.log(`-- currentUser ${currentUser}`);

  function loginLink() {
    return <Button href="/login" style={{ color: '#FFF' }}>
      Login
    </Button>
  }

  function logoutLink() {
    return <Button href="/" onClick={handleLogout} style={{ color: '#FFF' }}>
      Logout
    </Button>
  }

  function handleLogout() {
    ReactSession.set("currentUserEmail", "");
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {currentUser || 'Ram on Rails'}
          </Typography>
          {currentUser ? logoutLink() : loginLink()}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
