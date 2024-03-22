import {createTheme} from '@mui/material/styles'

export const customTheme = createTheme({
    palette: {
        primary: {
            main: '#f50057',
        },
        secondary: {
            main: '#f50057',
        },
       
    },
    
    typography: {
        fontFamily: [
            'Roboto',
            'sans-serif',
        ].join(','),
    },
});