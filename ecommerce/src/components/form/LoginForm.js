'use client'
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useState } from 'react'
import { getUsers } from '@/backend/db_query/user';
import { getAdmins } from '@/backend/db_query/admin';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { LoginContext } from '@/context/LoginContext';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const defaultTheme = createTheme();

export default function SignIn() {
  const router = useRouter()

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const [ userInput, setUserInput ] = useState({email:"", password:""})
  const { loginDetails, handleChange } = useContext(LoginContext)

  async function handleLogin() {
    const users = await getUsers()
    const admins = await getAdmins()
    console.log(users)

    const matchingUser = users.find((user)=>user.email === userInput.email && user.password === userInput.password)
    const matchingAdmin = admins.find(admin => admin.email === userInput.email && admin.password === userInput.password)

    if (matchingUser) {
      handleChange({
        email: email,
        password: password,
        UserId: matchingUser.UserId 
      })
      router.push('/')
    } else if (matchingAdmin) {
      router.push('/admin/dashboard')
    } else {
      alert('Incorrect email or password. Please try again')
    }
    
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
         
         <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" viewBox="0 0 48 48">
         <path fill="none" stroke="#4714ff" strokeLinecap="round" strokeLinejoin="round" d="M30.012 18.455a10.108 10.108 0 0 1 0 20.217c-5.388 0-16.96-1.92-20.079-7.759"/>
         <path fill="none" stroke="#4714ff" strokeLinecap="round" strokeLinejoin="round" d="M30.012 18.455H10.729a6.23 6.23 0 1 0 3.874 11.072l.017.021Z"/>
         <path fill="none" stroke="#4714ff" strokeLinecap="round" strokeLinejoin="round" d="m13.971 34.794l-8.264 2.859l4.226-6.74m13.801-7.873c-1.921 3.472-1.738 11.395 3.997 15.538M17.383 27.557c-.74 1.52.053 6.2 2.313 9.595"/>
         <circle cx="31.962" cy="25.732" r="2.79" fill="none" stroke="#4714ff" strokeLinecap="round" strokeLinejoin="round"/>
         <circle cx="41.448" cy="15.309" r="2.052" fill="none" stroke="#4714ff" strokeLinecap="round" strokeLinejoin="round"/>
         <circle cx="34.985" cy="11.38" r="2.052" fill="none" stroke="#4714ff" strokeLinecap="round" strokeLinejoin="round"/>
         <path fill="none" stroke="#4714ff" strokeLinecap="round" strokeLinejoin="round" d="M33.26 18.99c.985-1.223 3.242-3.457 6.112-3.79m-8.795 3.271a8.93 8.93 0 0 1 2.733-5.932"/>
         </svg>
       
          <Typography component="h1" variant="h5" sx={{color:'#4714ff'}}>
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              value={userInput.email}
              onChange={(e)=>setUserInput({...userInput, [e.target.name]:e.target.value})}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              value={userInput.password}
              onChange={(e)=>setUserInput({...userInput, [e.target.name]:e.target.value})}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleLogin}
            >
              Login
            </Button>
         
            <Grid container>

              <Grid item>
                <Link href="/user/signup" sx={{color:"blue"}} variant="body1">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
