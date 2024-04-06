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
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const PostDetails = () => {
  const navigate = useNavigate();
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

  const [linkError, setLinkError] = useState("");

  const handlePostInputChange = (e) => {
    // console.log(e.target.name, e.target.value);
    // console.log(updatedPost);
    const { name, value } = e.target;
    if (name === "link") {
      // Simple check for http:// or https:// prefix
      if (
        !value.startsWith("http://") &&
        !value.startsWith("https://") &&
        value !== ""
      ) {
        setLinkError("Link must start with http:// or https://");
      } else {
        setLinkError("");
      }
    }
    setUpdatedPost((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSavePost = async () => {
    try {
      await axios.put(`http://localhost:8081/api/posts/${postID}`, updatedPost);
      alert("Post updated successfully!");
      navigate("/notices");
    } catch (error) {
      console.error("There was a problem with your operation:", error);
    }
  };
  const handleDeletePost = async () => {
    const isConfirmed = window.confirm(
      "‼️ Are you sure you want to delete this post? ‼️"
    );

    // If the user clicks "Yes", proceed with the delete operation
    if (isConfirmed) {
      try {
        await axios.delete(`http://localhost:8081/api/posts/${postID}`);
        alert("Post deleted successfully!");
        navigate("/notices"); // Redirect after successful deletion
      } catch (error) {
        console.error("There was a problem with your operation:", error);
      }
    } else {
      // If the user clicks "No", do nothing
      console.log("Delete operation cancelled by user.");
    }
  };
  return (
    <>
      <Box
        component={Paper}
        sx={{
          width: "450px", // Set the width to 80% of the page
          mt: 12, // Margin top to push down from the top of the viewport
          mx: "auto", // Margin left and right set to auto to center the Box
          p: 4, // Padding inside the Box for some spacing around contents
        }}
      >
        <Typography variant="h4" component="h2" gutterBottom>
          Post Details
        </Typography>
        <Stack spacing={3}>
          <TextField
            id="title"
            label="Title"
            name="title"
            value={updatedPost.title}
            onChange={handlePostInputChange}
            fullWidth // Apply full width to the TextField
          />
          <TextField
            id="content"
            label="Content"
            name="content"
            multiline
            rows={10}
            value={updatedPost.content}
            onChange={handlePostInputChange}
            fullWidth // Apply full width to the TextField
          />
          <TextField
            id="image"
            label="Image"
            name="image"
            value={updatedPost.image}
            onChange={handlePostInputChange}
            fullWidth // Apply full width to the TextField
          />
          <TextField
            id="date"
            label="Date"
            name="date"
            type="text"
            value={updatedPost.date.slice(0, 10)}
            onChange={handlePostInputChange}
            fullWidth // Apply full width to the TextField
          />
          {updatedPost.link ? (
            <TextField
              error={!!linkError}
              helperText={linkError}
              id="link"
              label="Link"
              name="link"
              value={updatedPost.link}
              onChange={handlePostInputChange}
              fullWidth // Apply full width to the TextField
            />
          ) : (
            <TextField
              id="link"
              label="Link (Optional)"
              name="link"
              value=""
              onChange={handlePostInputChange}
              placeholder="Enter link here"
              fullWidth // Apply full width to the TextField
            />
          )}

          <Box sx={{ mr: 2 }}>
            {" "}
            {/* Apply spacing between the buttons */}
            <Button onClick={handleSavePost}>Save</Button>{" "}
            {/* Apply margin to both left and right for the middle button */}
            <Button onClick={() => navigate("/notices")}>Cancel</Button>
            {/* No additional margin needed for the last button */}
            <Button onClick={handleDeletePost}>Delete💣</Button>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default PostDetails;
