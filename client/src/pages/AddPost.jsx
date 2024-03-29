import React, { useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sheet from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { Typography } from "@mui/material";

const AddPost = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      title: event.target.title.value,
      content: event.target.content.value,
      image: event.target.image.value,
      link: event.target.link.value,
    };

    axios
      .post("http://localhost:8081/api/posts/create", data)
      .then((response) => console.log(response))
      .catch((err) => console.log(err))
      .then(setTimeout(() => navigate("/notices"), 700));
  };

  return (
    <div border="1">
      <Sheet
        sx={{
          width: 300,
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
        <form onSubmit={handleSubmit}>
          <FormControl sx={{ m: 1, width: "25ch" }}>
            <Typography level="h4" component="h1">
              <b>Add Notice</b>
            </Typography>
            <TextField
              id="title"
              label="Title"
              margin="normal"
              align="left"
              required
            />
            <br />
            <TextField
              id="content"
              label="content"
              multiline
              rows={10}
              required
              margin="normal"
              fullWidth
            />
            <br />
            <TextField id="image" label="image" margin="normal" />
            <TextField id="link" label="link" margin="normal" />
            <br />
            <button type="submit"> Submit </button>
          </FormControl>
        </form>
        <button onClick={() => navigate("/notices")}> Cancel </button>
        <br />
      </Sheet>
    </div>
  );
};

export default AddPost;
