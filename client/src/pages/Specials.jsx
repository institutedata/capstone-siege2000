import React, { useState, useEffect } from "react";
import {
  FormControl,
  Paper,
  TableContainer,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Checkbox,
  Typography,
} from "@mui/material";
import Sheet from "@mui/material/Card";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Specials(props) {
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  const [selected, setSelected] = useState([]);

  // Function to handle the search
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/specials")
      .then((response) => {
        setSearchResults(response.data);
      })
      .catch((error) =>
        console.error("There was an error fetching the specials: ", error)
      );
  }, []);
  // Function to handle selection change
  const handleSelect = (selectedSpecial) => {
    const selectedIndex = selected.findIndex(
      (item) => item.Stock.StockID === selectedSpecial.Stock.StockID
    );
    let newSelected = [];

    if (selectedIndex === -1) {
      // Not currently selected, add it
      newSelected = [...selected, selectedSpecial];
    } else {
      // Currently selected, remove it
      newSelected = selected.filter(
        (item) => item.Stock.StockID !== selectedSpecial.Stock.StockID
      );
    }

    setSelected(newSelected);
  };

  // Function to handle print button click
  const handleClickToPrintShelf = () => {
    localStorage.setItem("allSpecials", JSON.stringify(searchResults));
    window.open("/shelflabels", "_blank");
  };

  const handlePrintClickA5 = () => {
    localStorage.setItem("selectedSpecials", JSON.stringify(selected));
    window.open("/printA5", "_blank");
  };
  const openInNewTab = (url) => {
    window.open(url, "_blank").focus();
  };
  return (
    <div>
      <Sheet
        sx={{
          width: 1,
          mx: "auto", // margin left & right
          my: 10, // margin top & bottom
          py: 3, // padding top & bottom
          px: 2, // padding left & right

          display: "flex",
          flexDirection: "column",
          gap: 2,
          borderRadius: "sm",
          boxShadow: "md",
        }}
        variant="outlined"
      >
        <div>
          <Button
            variant="contained"
            onClick={handleClickToPrintShelf}
            sx={{ mt: 1 /* margin top */, ml: 2, width: 1 / 4 }}
          >
            Print Shelf
          </Button>

          <Button
            variant="contained"
            onClick={handlePrintClickA5}
            sx={{ mt: 1 /* margin top */, ml: 2, width: 1 / 4 }}
          >
            Print A5 Posters
          </Button>
        </div>
        <Typography variant="h6">Specials</Typography>
        <Typography variant="body2">
          Clicking <b>Print Shelf</b> will print shelf labels for all specials.
          Clicking <b>Print A5 Posters</b> will print for selected items. Click
          on the PLU for a stock card to view stock details.
        </Typography>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox"></TableCell>
                <TableCell>PLU</TableCell>
                <TableCell>Trade Name</TableCell>

                <TableCell align="left">Special Price</TableCell>
                <TableCell align="left">Normal Retail</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {searchResults.map((special) => (
                <TableRow key={special.Stock.stockID}>
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      checked={selected.some(
                        (item) => item.Stock.StockID === special.Stock.StockID
                      )}
                      onChange={() => handleSelect(special)}
                    />
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    style={{ cursor: "pointer", textDecoration: "underline" }}
                    onClick={() =>
                      navigate(`../stock/${special.Stock.StockID}`)
                    }
                  >
                    {special.Stock.plu}
                  </TableCell>
                  <TableCell>{special.Stock.TradeName}</TableCell>
                  <TableCell>
                    ${(special.SpecialPrice / 100.0).toFixed(2)}
                  </TableCell>
                  <TableCell>
                    ${(special.Stock.Retail / 100.0).toFixed(2)}
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
