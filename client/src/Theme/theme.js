// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    default: {
      main: '#fcfbf7', // Default primary color
    },
    // Additional light colors
    lightGrey: {
      main: '#8a8886',
    },
    lightBlue: {
      main: '#03a9f4',
    },
    lightGreen: {
      main: '#8bc34a',
    },
    lightRed: {
      main: '#e57373',
    },
    lightPurple: {
      main: '#ba68c8',
    },
    lightOrange: {
      main: '#ff9800',
    },
    lightPink: {
      main: '#f48fb1',
    },
    lightYellow: {
      main: '#fff176',
    },
    lightDeepOrange: {
      main: '#ff7043',
    },
    lightCyan: {
      main: '#00bcd4',
    },
    lightLime: {
      main: '#cddc39',
    },
    lightIndigo: {
      main: '#3f51b5',
    },
    lightDeepPurple: {
      main: '#673ab7',
    },
    lightGreen: {
      main: '#4caf50',
    },
    lightRed: {
      main: '#f44336',
    },
    // Add more light color options as needed
  },
});

export default theme;
