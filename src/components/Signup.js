import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import { login } from './../features/userSlice';
import env from "react-dotenv";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        Urgent Care Medical Company
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function SignInSide(props) {
  const [cookies, setCookie] = useCookies(['token']);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    axios
      .post(env.API_URL + '/api/auth/local/register', {
        username: data.get('username'),
        email: data.get('email'),
        password: data.get('password'),
      })
      .then((response) => {
        setCookie('token', response.data.jwt);

        dispatch(
          login({
            uid: response.data.user.id,
            username: response.data.user.username,
            email: response.data.user.email,
          })
        );
      })
      .catch((error) => {
        console.log('An error occurred:', error.response);
      });
  };

  const handleClick = () => {
    props.setSignInPage(true);
  };

  return (
    <>
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          autoComplete="username"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign Up
        </Button>
        <Typography variant="body2" color="text.secondary" align="center">
          <Link onClick={handleClick} href="#">
            {"Already have an account? Sign In"}
          </Link>
        </Typography>
        <Copyright sx={{ mt: 5 }} />
      </Box>
    </>
  );
}