import * as React from 'react';
import axios from 'axios';
import { ReactSession } from 'react-client-session';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function New() {
  const navigate = useNavigate();
  const currentUser = ReactSession.get("currentUserEmail");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const post_data = { referral: { email: data.get('email'), referrer_email: currentUser } }
    // submit to the API
    // 
    axios.post('/api/referrals.json',
      JSON.stringify({ ...post_data }), { headers: { 'Content-Type': 'application/json' } })
      .then(function (response) {
        console.log(response.data);
        // navigate using react router
        // 
        navigate("/register");
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        console.log()
      });

  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            id="outlined-required"
            name="email"
            label="Email address"
            defaultValue=""
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Invite
          </Button>
        </div>
      </Box>
    </>
  )
}
