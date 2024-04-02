import React, { useState, useRef } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Grid,
} from "@mui/material";

const PinLogin = () => {
  // Create state for each digit of the PIN
  const [pin, setPin] = useState(Array(4).fill(""));
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleChange = (index) => (event) => {
    const value = event.target.value;
    const newPin = [...pin];
    newPin[index] = value.slice(-1); // Take only the last character
    setPin(newPin);

    // Automatically move focus to the next input box if not the last one
    if (index < 3 && value) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const fullPin = pin.join("");
    console.log("Full PIN:", fullPin);
    // Send the PIN to your server for verification here
  };

  return (
    <div className="posts">
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Enter PIN
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <Grid container spacing={2} justifyContent="center">
              {pin.map((digit, index) => (
                <Grid item key={index}>
                  <TextField
                    inputRef={inputRefs[index]}
                    variant="outlined"
                    type="password"
                    inputProps={{ maxLength: 1, pattern: "[0-9]*" }}
                    value={digit}
                    onChange={handleChange(index)}
                    autoFocus={index === 0}
                    sx={{ width: "60px" }} // Adjust width as needed
                  />
                </Grid>
              ))}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default PinLogin;
