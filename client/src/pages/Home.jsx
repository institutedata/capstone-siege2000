import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography, Paper, Card } from '@mui/material';
import Posts from '../components/posts';
import { Image } from 'react-bootstrap';

// Import the image if it's in the src folder. If it's in the public folder, you don't need to import it.
// import teamPhoto from '../path/to/your/images/teamPhoto.jpg';

export default function HomePage() {
    return (
       

       
            <div className="posts" style={{ textAlign: 'center' }}>
              <Grid container spacing={3} justifyContent="center" width="80%">
                <Grid item xs={12}>
                  <Typography variant="h3" gutterBottom>
                    PharmaShelf Plus
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h3" color="text.primary" gutterBottom>
                    Notices
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Posts />
                </Grid>
              </Grid>
            </div>
          );
        }
