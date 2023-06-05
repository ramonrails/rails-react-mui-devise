import React from "react";
import { Link } from "react-router-dom";
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Navbar from "./Navbar";
import { ReactSession } from 'react-client-session';
import ReferralList from "../models/referral/List";
import ReferralNew from "../models/referral/New";

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
          <ReferralNew />
          <ReferralList />
        </>
      }
    </>
  )
};
