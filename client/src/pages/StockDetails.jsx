import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FormControl, Stack, TextField, Typography } from '@mui/material';

const StockDetails = () => {
  const { stockID } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const apiUrl = `http://localhost:8080/api/stock/search?stockID=${stockID}`;

  useEffect(() => {
    const fetchStockDetails = async () => {
      try {
        const response = await axios.get(apiUrl);
        console.log(response.data);
        setSearchResults(response.data); // Assuming the API returns an array of objects
      } catch (error) {
        console.error("There was a problem with your fetch operation:", error);
      }
    };

    fetchStockDetails();
  }, [stockID, apiUrl]);

  return (
    <div className="posts">
      <Typography variant="h5">Stock Details for Stock ID: {stockID}</Typography>
      {/* Render your stock details here, based on searchResults */}
      <Typography variant="h6">Stock Details</Typography>
      <form>
       
                {searchResults.map((stock) => (
                    <div key={stock.StockID}>
                        <Typography>PLU: {stock.PLU}</Typography>
                        <Typography>Trade Name: {stock.TradeName}</Typography>
                        <Typography>Real Cost: {stock.RealCost}</Typography>
                        <Typography>Retail: {stock.Retail}</Typography>
                    <Stack spacing="2">
                    <FormControl  sx={{flexDirection:'row', m:4, p:2, border:1}} >
                        
                        <TextField sx={{m:0}}label="PLU/Pharmacode" defaultValue={stock.PLU} />
                        <TextField sx={{ml:1, width:'auto', minWidth:'480px'}}label="Trade Name" defaultValue={stock.TradeName} />
                      </FormControl>
                      <FormControl  sx={{flexDirection:'row', m:4, border:1, mt:2, p:1}} >
                        <Typography variant="h10"sx={{m:0}}>Stock Details</Typography>
                        <TextField sx={{m:0, mt:2}}label="Real Cost" defaultValue={stock.RealCost} />
                        <TextField sx={{ml:1, mt:2}}label="Retail" defaultValue={stock.Retail} />
                        <TextField sx={{ml:1, mt:2}}label="SOH" defaultValue={stock.SOH} />
                        
                    </FormControl>
                    </Stack>
                    </div>
                ))}
            
           
      </form>
    </div>
  );
};

export default StockDetails;
