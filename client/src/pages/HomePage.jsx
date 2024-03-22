import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography, Paper } from '@mui/material';
import Posts from '../components/posts';
import { Image } from 'react-bootstrap';

// Import the image if it's in the src folder. If it's in the public folder, you don't need to import it.
// import teamPhoto from '../path/to/your/images/teamPhoto.jpg';

export default function HomePage() {
    return (
        <div className="posts">
            <Typography variant="h3" gutterBottom>
                Welcome to Our Team Portal
            </Typography>
            <Grid container spacing={2}xs={12} md={6} justifyContent="center">
                <Grid item xs={12} md={6}sx={{ minHeight: '50%' }}>
                    <Paper style={{ padding: '20px' }}sx={{ minHeight: '80%' }}>
                        <Typography variant="h4"  color="text.secondary" gutterBottom>
                            Staff Updates
                        </Typography>
                        <img src="https://www.surveylegend.com/wordpress/wp-content/uploads/2021/02/happy-employees.png" alt="Staff" style={{ width: '100%', height: 'auto', marginBottom: '20px' }} />
                        
                        <Typography variant="n">
                            Congratulations to Maddii and Donna, with their new Vaccinator certifications. They are now able to administer COVID-19 vaccines to our patients.
                            <br />

                            G_____ is away until 6 April. Evie will be covering as Duty Pharmacist during this time.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6} sx={{ minHeight: '50%' }}>
                    <Paper style={{ padding: '20px' }}sx={{ minHeight: '80%' }}>
                        <Typography variant="h4"  color="text.secondary" gutterBottom>
                            Upcoming Events
                        </Typography>
                        <img src="https://img.freepik.com/free-photo/happy-bunny-with-many-easter-eggs-grass-festive-background-decorative-design_90220-1091.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1711065600&semt=ais" alt="Staff" style={{ width: '100%', height: 'auto', marginBottom: '20px' }} />
                        <Typography variant="n">
                         We will be closed on Good Friday and Easter Monday. Open 9 to 1 on Saturday. <br />
                         Funded Flu vaccines start on 1 April. <br />

                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper style={{ padding: '20px' }}>
                        <Typography variant="h4"  color="text.secondary" gutterBottom>
                            Helpful Resources
                        </Typography>
                        
                        <Typography variant="n">
                            View the Posts page for updated information and help. <br />
                            <b>RxOne Updates</b> - see RxOne homescreen for updates <br />
                            <b>COVID-19 Information</b> - see the Ministry of Health website <br />

                            We will be updating links to useful resources here. If you have any suggestions, please let Colin know.
                        </Typography>
                    </Paper>
                
            </Grid>
            <Typography variant="h3"  color="text.primary" textAlign={'center'} gutterBottom>Notices</Typography>
            <Posts/>
            </Grid>
        </div>
    );
}
