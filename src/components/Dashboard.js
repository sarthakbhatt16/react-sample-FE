import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Appbar from './Appbar';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { logout, selectUser } from './../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import CardMedia from '@mui/material/CardMedia';

const mdTheme = createTheme();

function Dashboard(props) {
  const user = useSelector(selectUser);

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Appbar />
          <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="xxl" sx={{ mt: 4, mb: 4 }}>
            <Grid item xs={12}>
              <Paper sx={{ p: 0, display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  image={props.image + '.png'}
                  alt={props.image.toString().toUpperCase()}
                />
              </Paper>
            </Grid>
            {/* <Copyright sx={{ pt: 4 }} /> */}
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Dashboard;