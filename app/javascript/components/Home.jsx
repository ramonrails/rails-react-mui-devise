import React from "react";
import { Link } from "react-router-dom";
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Navbar from "../components/Navbar";
import { ReactSession } from 'react-client-session';

export default () => {
  const currentUser = ReactSession.get("currentUserEmail");

  return (
    <>
      <Navbar />
      <br />
      <Alert severity="info">Rails, React, MySQL, MUI style</Alert>
      <br />
      {
        currentUser && <>
          <hr />
          <h1>Referrals</h1>
          {/* referrals here */}
        </>
      }
    </>
  )
};
