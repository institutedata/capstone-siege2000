import { useState } from 'react'

import './App.css'
import { CssVarsProvider } from '@mui/joy/styles'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import NavBar from './components/NavBar'
import { ThemeProvider } from '@mui/material/styles'
import { customTheme } from './components/customTheme'
//import 'bootstrap/dist/css/bootstrap.min.css';


function App(props) {



  return (
    <div className="App">
      <div className="container" margin-top="12px">
    <ThemeProvider theme={customTheme}>
      <BrowserRouter>
      
      
        <NavBar />
        
        <AppRoutes {...props} marginTop="12px" />
      </BrowserRouter>
     </ThemeProvider>
     
      </div>
      </div>
    
  )
}

export default App
