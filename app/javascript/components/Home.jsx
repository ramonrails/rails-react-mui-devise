import React from "react";
import { Link } from "react-router-dom";
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';

export default () => (
  <>
    <Alert severity="info">Rails, React, MySQL, MUI</Alert>
    <Alert severity="success">This layout is MUI styled</Alert>
    <Button variant="contained">
      <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>Let's go</Link>
    </Button>
  </>
);
