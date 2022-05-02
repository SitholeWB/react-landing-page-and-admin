import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { connect } from 'react-redux';
import { Typography } from '@mui/material';


function NotFoundPage() {
    return (
        <Grid container spacing={3}>

            <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                    <Typography component="h1" variant="h4">
                        404! The pae you for is not found... why don't you implement it yourself?
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    )
};

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
    // Redux Store --> Component
    return {
        isAuthenticated: state.authReducer?.tokenObject !== null
    };
};

export default connect(mapStateToProps)(NotFoundPage);