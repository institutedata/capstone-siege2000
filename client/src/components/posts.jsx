import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { blueGrey } from "@mui/material/colors";
import moment from "moment";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import { EditPostButton } from "./addPostButton";

export default function Posts() {
  // const navigate = useNavigate();
  const [posts, setPosts] = useState([]); // Initialize posts state as an empty array

  const card = (
    <React.Fragment>
      {posts.map((post) => (
        <Card
          key={post.id}
          variant="outlined"
          sx={{ width: 1 / 3, flexDirection: "row" }}
        >
          <CardContent>
            <Typography
              variant="h4"
              bgcolor={blueGrey}
              color="text.secondary"
              gutterBottom
            >
              {post.title}
            </Typography>
            <Box
              component="img"
              sx={{
                height: "auto",
                width: "100%",
                mb: 1, // Margin bottom
              }}
              src={post.image}
              alt="Description of the image"
            />
            <Typography variant="n" component="div">
              {post.content}
            </Typography>

            <Typography sx={{ mb: 1 }} color="text.secondary">
              {moment(post.date).format("DD-MM-YYYY hh:mm:ss")}
            </Typography>
            <Typography sx={{ mb: 1 }} color="text.secondary">
              <Link href={post.link} target="_blank" rel="noopener noreferrer">
                Link
              </Link>
            </Typography>
            <Typography sx={{ mb: 1 }} color="text.secondary">
              <Link
                href={`../editnotice/${post.id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Edit Post
              </Link>
            </Typography>
          </CardContent>
        </Card>
      ))}
    </React.Fragment>
  );

  useEffect(() => {
    axios
      .get("http://localhost:8081/api/posts")
      .then((response) => {
        if (response.data.data && Array.isArray(response.data.data)) {
          setPosts(response.data.data);
          console.log("Posts data: ", response.data.data);
        } else {
          console.error(
            "Received data is not in expected format:",
            response.data
          );
        }
      })
      .catch((error) =>
        console.error("There was an error fetching the posts: ", error)
      );
  }, []);

  return (
    <div>
      <Paper
        container
        spacing={3}
        xs={12}
        sm={6}
        columns={{ xs: 4, sm: 6, md: 6 }}
        sx={{ flexWrap: "wrap", flexDirection: "row" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row", // Change from 'column' to 'row'
            flexWrap: "wrap", // Allow items to wrap
            gap: 2, // Add some space between cards
            p: 1,
            m: 1,
            bgcolor: "background.paper",
            width: 1,
          }}
          xs={12}
          sm={12}
        >
          {card}
        </Box>
      </Paper>
    </div>
  );
}
