import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button, Divider } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import { openLogin } from '../store/actions/loginActions';
import { setEmail, setFirstName, setLastName, setLocation, closeRegister } from '../store/actions/registerActions';
import { registerUser } from '../store/actions/userActions';
import { setSnackBarOpen } from '../store/actions/snackBarActions';

function RegisterPage(props) {
    const dispatch = useDispatch();
    const loginClick = () => {
        dispatch(openLogin())
        dispatch(closeRegister())
    }
    const [state, setState] = useState({
        open: true,
        pendingRequestsCount: 0,
        email: props.registerEmail,
        emailError: '',
        password: '',
        passwordError: '',
        confirmPassword: '',
        confirmPasswordError: '',
        firstName: props.registerFirstName,
        firstNameError: '',
        lastName: props.registerLastName,
        lastNameError: '',
        location: props.registerLocation,
    });

    const emailChange = (event) => {
        setState({ ...state, email: event.target.value, emailError: '' });
        dispatch(setEmail(event.target.value));
    }

    const firstNameChange = (event) => {
        setState({ ...state, firstName: event.target.value, firstNameError: '' });
        dispatch(setFirstName(event.target.value));
    }

    const lastNameChange = (event) => {
        setState({ ...state, lastName: event.target.value, lastNameError: '' });
        dispatch(setLastName(event.target.value));
    }

    const locationChange = (event) => {
        setState({ ...state, location: event.target.value });
        dispatch(setLocation(event.target.value));
    }
    const handleRegistration = () => {
        let hasErrors = false;

        if (!state.email || state.email?.length < 3) {
            hasErrors = true;
            setState({ ...state, emailError: 'Valid email address is required' })
        }
        if (!state.firstName || state.firstName?.length < 2) {
            hasErrors = true;
            setState({ ...state, firstNameError: 'FirstName is required' })
        }
        if (!state.lastName || state.lastName?.length < 2) {
            hasErrors = true;
            setState({ ...state, lastNameError: 'LastName is required' })
        }
        if (!state.password || state.password?.length < 1) {
            hasErrors = true;
            setState({ ...state, passwordError: 'Password is required' })
        }
        if (!state.confirmPassword || state.confirmPassword?.length < 1) {
            hasErrors = true;
            setState({ ...state, confirmPasswordError: 'Password is required' })
        }
        if (state.confirmPassword?.length > 1 && state.password?.length > 1) {
            if (state.confirmPassword !== state.password) {
                hasErrors = true;
                setState({ ...state, confirmPasswordError: 'Passwords must match.', passwordError: 'Passwords must match.' })
            }
        }
        if (!hasErrors) {
            setState({ ...state, pendingRequestsCount: state.pendingRequestsCount + 1 })
            dispatch(registerUser(state.email, state.password)).unwrap().then((res) => {
                setState({ ...state, pendingRequestsCount: state.pendingRequestsCount - 1 })
                dispatch(setSnackBarOpen(true, 'Registered successfully.'))
                dispatch(closeRegister());
                dispatch(openLogin());
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
                    Register as new user
                </Typography>
            </Grid>
            <Divider />
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="First name"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                        value={state.firstName}
                        onChange={(event) => firstNameChange(event)}
                        helperText={state.firstNameError}
                        error={state.firstNameError?.length > 0}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Last name"
                        fullWidth
                        autoComplete="family-name"
                        variant="standard"
                        value={state.lastName}
                        onChange={(event) => lastNameChange(event)}
                        helperText={state.lastNameError}
                        error={state.lastNameError?.length > 0}
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
                        onChange={(event) => setState({ ...state, password: event.target.value, passwordError: '' })}
                        helperText={state.passwordError}
                        error={state.passwordError?.length > 0}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="confirmPassword"
                        name="confirmPassword"
                        label="Confirm Password"
                        fullWidth
                        variant="standard"
                        type="password"
                        onChange={(event) => setState({ ...state, confirmPassword: event.target.value, confirmPasswordError: '' })}
                        helperText={state.confirmPasswordError}
                        error={state.confirmPasswordError?.length > 0}
                    />
                </Grid>


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
                        id="location"
                        name="location"
                        label="Location (City, Area)"
                        fullWidth
                        variant="standard"
                        value={state.location}
                        onChange={(event) => locationChange(event)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="caption" color="inherit">
                        By clicking the "Sign up for free" button, you are creating an account, and agree to Terms of Service and Privacy Policy
                    </Typography>
                </Grid>
                <Grid container justifyContent="center" item xs={12} >
                    <Button type="submit" variant="contained" onClick={() => handleRegistration()}>
                        Register for free
                    </Button>
                    &nbsp;&nbsp;&nbsp;
                    <Button variant="outlined" onClick={() => dispatch(closeRegister())} >
                        Close
                    </Button>
                </Grid>
                <Grid container justifyContent="center" item xs={12} >
                    <Divider />
                    <Button onClick={() => loginClick()} >
                        Already have an account? Sign in
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
        registerEmail: state.registerReducer.email,
        registerFirstName: state.registerReducer.firstName,
        registerLastName: state.registerReducer.lastName,
        registerLocation: state.registerReducer.location,
    };
};

export default connect(mapStateToProps)(RegisterPage);