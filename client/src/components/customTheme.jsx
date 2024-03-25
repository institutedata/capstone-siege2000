import {createTheme} from '@mui/material/styles'

export const customTheme = createTheme({
    palette: {
        primary: {
            main: '#173eb6',
        },
        secondary: {
            main: '#3083e2',
        },
       
    },
    
    typography: {
        fontFamily: [
            'Roboto',
            'sans-serif',
        ].join(','),
    },
});