import React, { useState } from 'react';
import {FormControl, Grid, Typography, TextField, Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import  axios  from 'axios';



export default function Stock() {
    const [inputValue, setInputValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const navigate = useNavigate();

    // Function to handle the search
    const handleSearch = async (event) => {
        event.preventDefault(); // Prevent the default form submission
        console.log('Searching for:', inputValue);
//check if it is a number or not - if a number then search by PLU, if not then search by trade name

        const queryType = isNaN(inputValue) ? 'tradeName' : 'plu';
        const apiUrl = `http://localhost:8080/api/stock/search?${queryType}=${inputValue}`;

        try {
            
            const response = await axios.get(apiUrl);
            
            
            console.log(response.data);
            setSearchResults(response.data); // Assuming the API returns an array of objects
        } catch (error) {
            console.error("There was a problem with your fetch operation:", error);
        }
    };

    return (
        <div className="posts">
            <Typography variant="h4">Stock</Typography>
            <Grid  container spacing={2} width="80%" >
               
                <Grid item xs={12} md={12}sx={{flexDirection:'row'}}>
                <form onSubmit={handleSearch}>
                <FormControl onSubmit={handleSearch} xs={12}sx={{ boxShadow: 1,p:2, flexDirection:'row'}} >
                    <TextField 
                        label="Trade Name or PLU" 
                        value={inputValue} 
                        onChange={(e) => setInputValue(e.target.value)}
                        
                    >
                    </TextField>
                    <Button variant="contained" color="primary" type="submit" > Search</Button>
                </FormControl>
                </form>
                </Grid>

                {searchResults.length > 0 && (
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>PLU</TableCell>
                                <TableCell>Trade Name</TableCell>
                                <TableCell>Real Cost</TableCell>
                                <TableCell>Retail</TableCell>
                                <TableCell>Stock on Hand</TableCell>
                                <TableCell>MTD</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                           
                            {searchResults.map((row, index) => (
                                <TableRow key={row.StockID}>
                                    <TableCell
                                        component="th" 
      scope="row" 
      style={{ cursor: 'pointer', textDecoration: 'underline' }}
      onClick={() => navigate(`/stock/${row.StockID}`)}>
                {row.PLU}
      </TableCell>
                                    <TableCell>{row.TradeName}</TableCell>
                                    <TableCell>${(row.RealCost/100)}</TableCell>
                                    <TableCell>${(row.Retail/100)}</TableCell>
                                    <TableCell> {row.PackSize !== 0 ? (row.SOH / row.PackSize) : ` ${row.SOH} No packsize`}</TableCell>
                                    <TableCell>{row.MTD}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                )}
            </Grid>
        </div>
    );
}
