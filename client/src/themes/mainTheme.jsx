import { createTheme } from '@mui/material/styles';

export const tealTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#4db6ac',
      dark: '#315a5a',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#efe9e9',
      paper: '#e8e0e0',
    },
    text: {
      primary: 'rgba(55,31,31,0.87)',
    },},
   
}
)


export default tealTheme;