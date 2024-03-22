import React from 'react';
import { TextField, Grid, Paper, Button } from '@mui/material';

export default function StockItem() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      tradeName: formData.get('tradeName'),
      retailPrice: formData.get('retailPrice'),
      stockOnHand: formData.get('stockOnHand'),
      costPrice: formData.get('costPrice'),
    };
    console.log(data);
    // Process your form data as needed here
  };

  return (
    <Paper style={{ padding: 16, marginTop:'100px' }}>
        <h2>Stock Card</h2>
      <form onSubmit={handleSubmit}>
        <Grid container alignItems="flex-start" spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
            type="text"
              required
              id="tradeName"
              name="tradeName"
              label="Trade Name"
              fullWidth
              autoComplete="off"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
            type="text"
              required
                           
              id="eCommerceName"
              name="eCommerceName"
              label="eCommerce Name"
              fullWidth
              autoComplete="off"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
            type="number"
              required
              id="plu"
              name="plu"
              label="PLU / Pharmacode"
              fullWidth
              autoComplete="off"
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="retailPrice"
              name="retailPrice"
              label="Retail Price"
              type="number"
              fullWidth
              autoComplete="off"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="stockOnHand"
              name="stockOnHand"
              label="Stock On Hand"
              type="number"
              fullWidth
              autoComplete="off"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="costPrice"
              name="costPrice"
              label="Cost Price"
              type="number"
              fullWidth
              autoComplete="off"
            />
          </Grid>
          <Grid item style={{ marginTop: 16 }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}
