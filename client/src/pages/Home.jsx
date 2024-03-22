import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography, Paper } from '@mui/material';
import Posts from '../components/posts';
// Import the image if it's in the src folder. If it's in the public folder, you don't need to import it.
// import teamPhoto from '../path/to/your/images/teamPhoto.jpg';

export default function HomePage() {
    return (
        <div className="posts">
            <Typography variant="h3" gutterBottom>
                Welcome to Our Team Portal
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}sx={{ minHeight: '50%' }}>
                    <Paper style={{ padding: '20px' }}sx={{ minHeight: '80%' }}>
                        <Typography variant="h4" gutterBottom>
                            Staff Updates
                        </Typography>
                        <Typography>
                            
                            Congratulations to Maddii and Donna, with their new Vaccinator certifications. They are now able to administer COVID-19 vaccines to our patients.
                            <br />

                            G_____ is away until 6 April. Evie will be covering as Duty Pharmacist during this time.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6} sx={{ minHeight: '50%' }}>
                    <Paper style={{ padding: '20px' }}sx={{ minHeight: '80%' }}>
                        <Typography variant="h4" gutterBottom>
                            Upcoming Events
                        </Typography>
                        <Typography>
                         We will be closed on Good Friday and Easter Monday. Open 9 to 1 on Saturday. <br />
                         Funded Flu vaccines start on 1 April. <br />

                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper style={{ padding: '20px' }}>
                        <Typography variant="h4" gutterBottom>
                            Helpful Resources
                        </Typography>
                        <Typography>
                            View the Posts page for updated information and help. <br />
                            <b>RxOne Updates</b> - see RxOne homescreen for updates <br />
                            <b>COVID-19 Information</b> - see the Ministry of Health website <br />

                            We will be updating links to useful resources here. If you have any suggestions, please let Colin know.
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
            <Posts/>
        </div>
    );
}
