import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button, Divider } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import { closeLogin, setEmail } from '../store/actions/loginActions';
import { openRegister } from '../store/actions/registerActions';
import { getToken } from '../store/actions/authActions';

function LoginPage(props) {
    const dispatch = useDispatch();
    const registerClick = () => {
        dispatch(openRegister());
        dispatch(closeLogin());
    }


    const [state, setState] = useState({
        open: true,
        pendingRequestsCount: 0,
        email: props.loginEmail,
        emailError: '',
        password: '',
        passwordError: ''
    });

    const emailChange = (event) => {
        setState({ ...state, email: event.target.value, emailError: '' })
        dispatch(setEmail(event.target.value));
    }
    const handleLogin = () => {
        let hasErrors = false;
        
        if (!state.email || state.email?.length < 3) {
            hasErrors = true;
            setState({ ...state, emailError: 'Valid email address is required' })
        }
        if (!state.password || state.password?.length < 1) {
            hasErrors = true;
            setState({ ...state, passwordError: 'Password is required' })
        }
        if (!hasErrors) {
            setState({ ...state, pendingRequestsCount: state.pendingRequestsCount + 1 })
            dispatch(getToken(state.email, state.password)).unwrap().then((res) => {
                setState({ ...state, pendingRequestsCount: state.pendingRequestsCount - 1 })
                dispatch(closeLogin());
            });
        }
    }

    return (
        <div style={{ backgroundColor: "white" }}>

            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1, position: 'absolute' }}
                open={(state.open) && state.pendingRequestsCount > 0}
            >
                <Grid justifyContent="center" >
                    <Grid item xs={12} >
                        <CircularProgress color="inherit" />
                    </Grid>
                    <Grid item xs={12}>
                        <Button color='error' onClick={() => setState({ ...state, open: false })}>cancel</Button>
                    </Grid>
                </Grid>
            </Backdrop>

            <Grid container justifyContent="center" item xs={12} >
                <Typography
                    component="h1"
                    variant="h4"
                    color="black"
                    justifyContent="center"
                    style={{ justifyContent: "center" }}
                >
                    Login
                </Typography>
            </Grid>
            <Divider />
            <Grid container justifyContent="center" item xs={12} >
                <Typography
                    color="green"
                    justifyContent="center"
                    style={{ justifyContent: "center" }}
                >
                    Any random Email and password will work for this demo.
                </Typography>
            </Grid>
            <Divider />
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="email"
                        name="email"
                        label="Email"
                        fullWidth
                        variant="standard"
                        value={state.email}
                        onChange={(event) => emailChange(event)}
                        helperText={state.emailError}
                        error={state.emailError?.length > 0}
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="password"
                        name="password"
                        label="Password"
                        fullWidth
                        variant="standard"
                        type="password"
                        onChange={(event) => setState({ ...state, password: event.target.value })}
                        helperText={state.passwordError}
                        error={state.passwordError?.length > 0}
                    />
                </Grid>

                <Grid container justifyContent="center" item xs={12} >
                    <Button type="submit" variant="contained" onClick={() => handleLogin()} >
                        Login
                    </Button>
                    &nbsp;&nbsp;&nbsp;
                    <Button variant="outlined" onClick={() => dispatch(closeLogin())} >
                        Close
                    </Button>
                </Grid>
                <Grid container justifyContent="center" item xs={12} >
                    <Divider />
                    <Button onClick={() => registerClick()} >
                        Don't have account? Register
                    </Button>
                </Grid>

            </Grid>
        </div>
    )
};

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
    // Redux Store --> Component
    return {
        loginEmail: state.loginReducer.email,
    };
};

export default connect(mapStateToProps)(LoginPage);