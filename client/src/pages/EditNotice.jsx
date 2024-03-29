import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  FormControl,
  Stack,
  TextField,
  Typography,
  Button,
  ButtonGroup,
  Box,
} from "@mui/material";

const PostDetails = () => {
  const { postID } = useParams();
  const [updatedPost, setUpdatedPost] = useState({
    title: "Test Title",
    content: "",
    image: "",
    date: "",
    link: "",
  });

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const apiUrl = `http://localhost:8081/api/posts/${postID}`;
        const response = await axios.get(apiUrl);
        const postData = response.data.data;
        setUpdatedPost({
          title: postData.title || "",
          content: postData.content || "",
          image: postData.image || "",
          date: postData.date || "",
          link: postData.link || "",
        });
      } catch (error) {
        console.error("There was a problem with your fetch operation:", error);
      }
    };

    fetchPostDetails();
  }, [postID]);

  const handlePostInputChange = (e) => {
    console.log(e.target.name, e.target.value);
    console.log(updatedPost);
    const { name, value } = e.target;
    setUpdatedPost((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSavePost = async () => {
    try {
      await axios.put(`http://localhost:8081/api/posts/${postID}`, updatedPost);
      alert("Post updated successfully!");
    } catch (error) {
      console.error("There was a problem with your operation:", error);
    }
  };
  return (
    <div className="posts" width="80%">
      <Box sx={{ flexDirection: "row", m: 4, p: 2, border: 1 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Post Details
      </Typography>
      
        <Stack spacing={2}>
          <TextField
            id="title"
            label="Title"
            name="title" // Specify name attribute for identifying the field in handlePostInputChange
            value={updatedPost.title}
            onChange={handlePostInputChange}
          />
          <TextField
            id="content"
            label="Content"
            name="content" // Specify name attribute for identifying the field in handlePostInputChange
            multiline
            rows={10}
            value={updatedPost.content}
            onChange={handlePostInputChange}
          />
          <TextField
            id="image"
            label="Image"
            name="image" // Specify name attribute for identifying the field in handlePostInputChange
            value={updatedPost.image}
            onChange={handlePostInputChange}
          />
          <TextField
            id="date"
            label="Date"
            name="date" // Specify name attribute for identifying the field in handlePostInputChange
            type="text"
            // Ensure the date format is correct for the date picker
            value={updatedPost.date.slice(0, 10)}
            onChange={handlePostInputChange}
          />
          <TextField
            id="link"
            label="Link"
            name="link" // Specify name attribute for identifying the field in handlePostInputChange
            value={updatedPost.link}
            onChange={handlePostInputChange}
          />
          <ButtonGroup>
            <Button onClick={handleSavePost}>Save</Button>
          </ButtonGroup>
        </Stack>
        </Box>
      
    </div>
  );
};

export default PostDetails;
