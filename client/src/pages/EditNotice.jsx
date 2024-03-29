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
import OrderItemsHistory from "../components/orderItemsHistory";

const PostDetails = () => {
  const { postID } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const apiUrl = `http://localhost:8081/api/posts/2`;

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const response = await axios.get(apiUrl);
        //console.log(response.data);
        setSearchResults(response.data); // Assuming the API returns an array of objects
      } catch (error) {
        console.error("There was a problem with your fetch operation:", error);
      }
    };

    fetchPostDetails();
  }, [postID, apiUrl]);
  //this section of code handles the state of TextFields. When a TextField is updated, the state is updated. This will be used to save the updated post fields to the database when the save button is clicked.
  const [updatedPost, setUpdatedPost] = useState({
    title: "",
    content: "",
    image: "",
    date: "",
    link: "",
  });
  useEffect(() => {
    if (searchResults && searchResults.length > 0) {
      const post = searchResults[0]; // Assuming you're interested in the first result
      setUpdatedPost({
        title: post.title || "",
        content: post.content || "",
        image: post.image,
        date: post.date,
        link: post.link || "",
      });
    }
  }, [searchResults]);

  const handlePostInputChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;
    //check if the field is numeric and format it as a number
    if (name === "date") {
      formattedValue = new Date(value).toISOString();
    }
    setUpdatedPost((prevState) => ({
      ...prevState,
      [name]: formattedValue,
    }));
  };

  const handleSavePost = async () => {
    try {
      await axios.put(`http://localhost:8081/api/posts/${postID}`, updatedPost);
      alert("Post updated successfully!");
    } catch (error) {
      console.error("There was a problem with your fetch operation:", error);
    }
  };

  return (
    <React.Fragment>
      <Typography variant="h4" component="h2" gutterBottom>
        Post Details
      </Typography>
      <FormControl>
        {searchResults.map((post) => (
          <Stack spacing={2} key={post.id}>
            <TextField
              id="title"
              label="Title"
              value={updatedPost.title}
              onChange={handlePostInputChange}
            />
            <TextField
              id="content"
              label="Content"
              multiline
              rows={10}
              value={updatedPost.content}
              onChange={handlePostInputChange}
            />
            <TextField
              id="image"
              label="Image"
              value={updatedPost.image}
              onChange={handlePostInputChange}
            />
            <TextField
              id="date"
              label="Date"
              type="date"
              value={updatedPost.date}
              onChange={handlePostInputChange}
            />
            <TextField
              id="link"
              label="Link"
              value={updatedPost.link}
              onChange={handlePostInputChange}
            />
            <ButtonGroup>
              <Button onClick={handleSavePost}>Save</Button>
            </ButtonGroup>
          </Stack>
        ))}
      </FormControl>
    </React.Fragment>
  );
};

export default PostDetails;
