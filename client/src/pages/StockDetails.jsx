import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  FormControl,
  Stack,
  TextField,
  Typography,
  Box,
  Button,
  ButtonGroup,
  InputAdornment,
} from "@mui/material";
import StockSalesChart from "../components/stockSalesChart";
import Stock from "./Stock";

const StockDetails = () => {
  const { stockID } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const apiUrl = `http://localhost:8080/api/stock/search?stockID=${stockID}`;

  useEffect(() => {
    const fetchStockDetails = async () => {
      try {
        const response = await axios.get(apiUrl);
        //console.log(response.data);
        setSearchResults(response.data); // Assuming the API returns an array of objects
      } catch (error) {
        console.error("There was a problem with your fetch operation:", error);
      }
    };

    fetchStockDetails();
  }, [stockID, apiUrl]);
  //this section of code handles the state of TextFields. When a TextField is updated, the state is updated. This will be used to save the updated stock fields to the database when the save button is clicked.
  const [updatedStock, setUpdatedStock] = useState({
    TradeName: "",
    RealCost: 0,
    Retail: 0,
    SOH: 0,
  });
  useEffect(() => {
    if (searchResults && searchResults.length > 0) {
      const stock = searchResults[0]; // Assuming you're interested in the first result
      setUpdatedStock({
        PLU: stock.PLU || "",
        TradeName: stock.TradeName || "",
        RealCost: stock.RealCost, // Assuming these are already in cents
        Retail: stock.Retail,
        SOH: stock.SOH || 0,
      });
    }
  }, [searchResults]);

  const handleStockInputChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;
    //check if the field is numeric and format it as a number
    if (name === "RealCost" || name === "Retail") {
      // Remove any non-numeric characters (e.g., currency symbols), then convert to float and back to integer cents
      formattedValue = parseInt(
        parseFloat(value.replace(/[^0-9\.]/g, "")) * 100
      );
    } else if (name === "SOH") {
      // Stock on hand should be an integer
      formattedValue = parseInt(value, 10);
    }

    setUpdatedStock({
      ...updatedStock,
      [name]: formattedValue,
    });
  };
  console.log("Updated Stock: onChange ", updatedStock);

  const handleSave = () => {
    //save the updated stock levels to appropriate API and table.
    const url = `http://localhost:8080/api/stock/${stockID}`;
    console.log("URL on click: ", url);
    console.log("Updated Stock on click: ", updatedStock);
    axios
      .put(url, updatedStock)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("There was an error updating the stock: ", error);
      });
  };

  return (
    <div className="posts" width="80%">
      <Typography variant="h5">
        Stock Details for Stock ID: {stockID}
      </Typography>

      {searchResults.map((stock) => (
        <div key={stock.StockID}>
          <Stack spacing="2">
            {/* <Box
              sx={{
                "& > :not(style)": { m: 4, p: 2, border: 1 }, // Apply margin, padding, and border to direct children
                "& input": {
                  margin: 1,
                  padding: "10px",
                  minWidth: "250px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }, // Style for input elements
                flexDirection: "column", // Stack form controls vertically
              }}
            > */}
            <Box sx={{ flexDirection: "row", m: 4, p: 2, border: 1 }}>
              <TextField
                sx={{ m: 0 }}
                label="PLU/Pharmacode"
                defaultValue={searchResults[0].PLU}
                name="PLU"
                variant="outlined"
              />
              <TextField
                sx={{ ml: 1, width: "auto", minWidth: "480px" }}
                label="Trade Name"
                defaultValue={searchResults[0].TradeName}
                name="TradeName"
                onChange={handleStockInputChange} // Update state on change
              />
            </Box>

            <FormControl
              sx={{ flexDirection: "row", m: 4, border: 1, mt: 2, p: 1 }}
            >
              <Typography variant="h10" sx={{ m: 0 }}>
                Stock Details
              </Typography>
              <TextField
                sx={{ m: 0, mt: 2 }}
                label="Real Cost"
                defaultValue={(searchResults[0].RealCost/100) }
                name="RealCost"
                onChange={handleStockInputChange} // Update state on change
              />
              <TextField
                sx={{ ml: 1, mt: 2 }}
                label="Retail"
                defaultValue={(searchResults[0].Retail / 100.0).toFixed(2)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
                onChange={handleStockInputChange} // Update state on change
                name="Retail"
              />
              <TextField
                sx={{ ml: 1, mt: 2 }}
                label="SOH"
                defaultValue={searchResults[0].SOH}
                name="SOH"
                onChange={handleStockInputChange} // Update state on change
              />
            </FormControl>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start", // Align buttons to the start of the flex container
                mt: 2,
              }}
            >
              <Button onClick={handleSave} variant="contained" sx={{ mr: 1 }}>
                Update
              </Button>
              <Button variant="contained">Cancel</Button>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                border: 1,
              }}
            >
              <StockSalesChart
                stockID={stock.StockID}
                stockName={stock.TradeName}
              />
            </Box>
          </Stack>
        </div>
      ))}
    </div>
  );
};

export default StockDetails;
