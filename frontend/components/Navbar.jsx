import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          TOKU Wellness
        </Typography>
        <Button color="inherit" component={Link} to="/">Dashboard</Button>
        <Button color="inherit" component={Link} to="/schedule">Schedule</Button>
        <Button color="inherit" component={Link} to="/meditation">Meditation</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
