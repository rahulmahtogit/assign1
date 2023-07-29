import {Fragment} from 'react';
import {Box, MenuItem, Typography, Container, useTheme} from '@mui/material';
import FitbitIcon from '@mui/icons-material/Fitbit';
import ColorThemeMenu from './ColorThemeMenu';
import LogoutButton from './LogoutButton';
import {  useSelector } from 'react-redux';


export default function Home() {

  const primaryColor = useSelector((state) => state.primaryColor);
  const {palette} = useTheme();
   const colorVal = palette[primaryColor].main;


  return (
    <Fragment>
      <Box sx={{backgroundColor:colorVal}}>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
      <MenuItem >
        <FitbitIcon sx={{ minWidth: 100, fontSize: '70px' }} /> 
        </MenuItem>
        <ColorThemeMenu/>
        <LogoutButton />
      </Box>
      </Box>

      <Container
          maxWidth={false}
          sx={{
            paddingTop: '20px',
            height: '100vh', // Set the height to 100% of the viewport height
            display: 'flex',
            marginTop: '20px',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor:  colorVal
          }}
        >
          {/* Your website content goes here */}
          <Typography variant="h4" component="h1" mt={4}>
            Welcome to My Preference Website!
          </Typography>
          <Typography variant="body1" mt={2}>
            Choose your favorite color theme from the menu above.
          </Typography>
        </Container>
    </Fragment>
  );
}