import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Key from '@material-ui/icons/VpnKey';
import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

//block ui
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';

//redux
import { connect } from 'react-redux';


export class HomePage extends React.Component {

    state = {
        pendingRequestsCount: 0,
        searchText: '',
        refresh: false
    }

    render() {
        
        return (
            <div className="login-page-class">
                <BlockUi tag="div" blocking={this.state.pendingRequestsCount > 0}>
                    <Grid container spacing={2} justify="center">
                        <Grid item xs={12} lg={6} md={6} style={{ marginTop: 10 }}>
                            <Typography align="center" variant="h5" color="inherit" className="headertypoclass" >
                                Your left page details
                            </Typography>
                            
                            </Grid>

                        <Grid item xs={12} lg={6} md={6} style={{ marginTop: 10 }}>
                            <Typography variant="h5" color="inherit" className="headertypoclass" >
                            Your right page details
                            </Typography>
                            
                        </Grid>
                    </Grid>
                </BlockUi>
            </div >
        );
    }
    componentDidMount() {
        this.setState({ pendingRequestsCount: this.state.pendingRequestsCount + 1 });

        setTimeout(function() { //Start the timer
            this.setState({ pendingRequestsCount: this.state.pendingRequestsCount - 1 }); //After 3 second,
        }.bind(this), 3000)
        
    }

}

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
    // Redux Store --> Component
    return {
        tokenObject: state.authReducer.tokenObject,
        
    };
};


const mapDispatchToProps = (dispatch) => ({

});


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);