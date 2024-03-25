import * as React from 'react';
import { useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/material/Card';
import CssBaseline from '@mui/joy/CssBaseline';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import Link from '@mui/joy/Link';
import StockSales from '../components/stockSalesChart';



export default function Login() {
  return (
    <main>
      
   
      <Sheet
        sx={{
          width: 300,
          mx: 'auto', // margin left & right
          my: 10, // margin top & bottom
          py: 3, // padding top & bottom
          px: 2, // padding left & right
          
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          borderRadius: 'sm',
          boxShadow: 'md',
        }}
        variant="outlined"
      >
        <div>
          <Typography level="h4" component="h1">
            <b>Welcome!</b>
          </Typography>
          <Typography level="body-sm">Sign in to continue.</Typography>
        </div>
        
        <FormControl>
          <FormLabel>User Name</FormLabel>
          <Input
            // html input attribute
            name="username"
            type="text"
            placeholder="jb"
          />
       
       
          <FormLabel>Password</FormLabel>
          <Input
            // html input attribute
            name="password"
            type="password"
            placeholder="password"
          />
        </FormControl>
        <Button variant="contained" sx={{ mt: 1 /* margin top */ }}>Log in</Button>
       
      </Sheet>
      <StockSales/>
    </main>
  );
}