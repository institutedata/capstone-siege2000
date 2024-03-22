import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { blueGrey } from '@mui/material/colors';
import moment from 'moment';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';
import Paper from '@mui/material/Paper';



 export default function Posts() {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]); // Initialize posts state as an empty array
    const card = (
    <React.Fragment>
        {posts.map(post => (
            <Card key={post.id} variant='outlined' sx={{width:1/3, flexDirection:"row"}}>
            <CardContent>
                <Typography variant="h4" bgcolor={blueGrey} color="text.secondary" gutterBottom>
                {post.title}
                </Typography>
                <Typography variant="n" component="div">
                {post.content}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
               {post.image}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {moment(post.date).format('DD-MM-YYYY hh:mm:ss')}
                </Typography>

                
            </CardContent>
            </Card>
           
        ))}
    

    </React.Fragment>
    )

    useEffect(() => {
        axios.get('http://localhost:8081/api/posts')
            .then(response => {
                // Assuming the structure is { result: 200, data: [/* array of posts */] }
                // Check if response.data.data exists and is an array before setting posts
                if (response.data.data && Array.isArray(response.data.data)) {
                    setPosts(response.data.data);
                } else {
                    console.error('Received data is not in expected format:', response.data);
                }
            })
            .catch(error => console.error('There was an error fetching the posts: ', error));
    }, []);

    return (
        <div >
            
            
                <Paper container spacing={3} xs={12} sm={6} columns={{xs:4, sm:6, md:6}}sx={{flexWrap:'wrap', flexDirection:'row'}}>
           <Box sx={{  display: 'flex',
            flexDirection: 'row', // Change from 'column' to 'row'
                flexWrap: 'wrap', // Allow items to wrap
            gap: 2, // Add some space between cards
            p: 1,
            m: 1,
            bgcolor: 'background.paper',
            width:1 }}
            xs={12}
            sm={12}>
            {card}
            </Box>
            </Paper>
      
        </div>
    );
}

