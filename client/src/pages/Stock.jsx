import React, { useState } from 'react';
import {FormControl, Grid, Typography, TextField, Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

export default function Stock() {
    const [inputValue, setInputValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    // Function to handle the search
    const handleSearch = async (event) => {
        event.preventDefault(); // Prevent the default form submission

//check if it is a number or not - if a number then search by PLU, if not then search by trade name

        const queryType = isNaN(inputValue) ? 'tradeName' : 'plu';
        const apiUrl = `http://localhost:8081/stock/search?${queryType}=${inputValue}`;

        try {
            const response = await fetch(apiUrl);
            if (!response.ok) throw new Error('Network response was not ok.');
            const data = await response.json();
            setSearchResults(data); // Assuming the API returns an array of objects
        } catch (error) {
            console.error("There was a problem with your fetch operation:", error);
        }
    };

    return (
        <div className="posts">
            <Typography variant="h4">Stock</Typography>
            <Grid  container spacing={2} width="80%" >
               
                <Grid item xs={12} md={12}sx={{flexDirection:'row'}}>
                <FormControl onSubmit={handleSearch} xs={12}sx={{ boxShadow: 1,p:2, flexDirection:'row'}} >
                    <TextField 
                        label="Trade Name or PLU" 
                        value={inputValue} 
                        onChange={(e) => setInputValue(e.target.value)}
                    >
                    </TextField>
                    <Button variant="contained" color="primary" type="submit" > Search</Button>
                </FormControl>
                </Grid>

                {searchResults.length > 0 && (
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>PLU</TableCell>
                                <TableCell>Trade Name</TableCell>
                                <TableCell>Other Columns</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {searchResults.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell>{row.plu}</TableCell>
                                    <TableCell>{row.tradeName}</TableCell>
                                    <TableCell>// Other row data</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                )}
            </Grid>
        </div>
    );
}
