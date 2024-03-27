import specials from '../static/specials.json'
import Sheet from '@mui/material/Card';
import { useState } from 'react';
import * as React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';


import Button from '@mui/material/Button';


export default function Specials(props) {
    const [selected, setSelected] = useState([]);
    

    // Function to handle selection change
    const handleSelect = (selectedSpecial) => {
        const selectedIndex = selected.findIndex(item => item.plu === selectedSpecial.plu);
        let newSelected = [];
      
        if (selectedIndex === -1) {
          // Not currently selected, add it
          newSelected = [...selected, selectedSpecial];
        } else {
          // Currently selected, remove it
          newSelected = selected.filter(item => item.plu !== selectedSpecial.plu);
        }
      
        setSelected(newSelected);
      };
  
    // Function to handle print button click
    const handlePrintClick = () => {
      localStorage.setItem('selectedSpecials', JSON.stringify(selected));
      window.open('/printA5', '_blank');
    };
  
    
    
    const openInNewTab = (url) => {
      window.open(url, '_blank').focus();}
    return (
    <div>
            
      <Sheet
        sx={{
          width: 1,
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
        <Button variant="contained" onClick={()=>
        openInNewTab('./shelflabels')} sx={{ mt: 1 /* margin top */,ml:2, width:1/4 }}>Print Shelf</Button>
        
        <Button variant="contained" onClick={handlePrintClick} sx={{ mt: 1 /* margin top */,ml:2, width:1/4 }}>
  Print A5 Posters
</Button>
        </div>
    
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead >
            <TableRow>
            <TableCell padding="checkbox"></TableCell>
              <TableCell >PLU</TableCell>
              <TableCell>Trade Name</TableCell>
              
              <TableCell align="left">Special Price</TableCell>
              <TableCell align="left">Normal Retail</TableCell>
          
            </TableRow>
          </TableHead>
          <TableBody>
            {specials.map((special) => (
             <TableRow key={special.plu}>
             <TableCell padding="checkbox">
               <Checkbox
                 color="primary"
                 checked={selected.some(item     => item.plu === special.plu)}
                 onChange={() => handleSelect(special)}
               />
             </TableCell>
             <TableCell component="th" scope="row">    
                {special.plu}
             </TableCell>
             <TableCell>
                {special.TradeName}
             </TableCell>
             <TableCell>
                {special.SpecialPrice}
             </TableCell>
             <TableCell>
                {special.Retail}
             </TableCell>
           </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> 
      </Sheet>
      </div>
    );
  }
