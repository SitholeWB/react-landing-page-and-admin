import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { connect } from 'react-redux';
import { IconButton, List, ListItem, ListItemText, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function SalesPage() {
    return (
        <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
                <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 240,
                    }}
                >
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        {[1, 2, 3].map((value) => (
                            <ListItem
                                key={value}
                                disableGutters
                                secondaryAction={
                                    <IconButton aria-label="comment">
                                        <ShoppingCartIcon />
                                    </IconButton>
                                }
                            >
                                <ListItemText primary={`Product on sale ${value}`} />
                            </ListItem>
                        ))}
                    </List>
                </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
                <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 240,
                    }}
                >
                    <Typography>
                        Sales page right
                    </Typography>
                </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                    <Typography>
                        Sales page bottom
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

export default connect(mapStateToProps)(SalesPage);