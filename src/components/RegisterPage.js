import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

//block ui
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';

//redux
import { connect } from 'react-redux';
import { registerUser } from '../store/actions/userActions';

export class RegisterPage extends React.Component {

  state = {
    pendingRequestsCount: 0,
    openMessage: false,
    messageInfo: {},
    gender: '',
    genderError: '',
    name: '',
    nameError: '',
    surname: '',
    surnameError: '',
    email: '',
    emailError: '',
    password: '',
    passwordError: '',
    confirmPassword: '',
    confirmPasswordError: ''
  }

  giveSuccessMessage = (message) => {
    let newMessage = {
      message,
      key: new Date().getTime()
    };

    this.setState({
      openMessage: true,
      messageInfo: newMessage

    });

  };

  backToHome = () => {
    this.props.history.push('/');
  };

  onSubmit = () => {

    let reject = false;
    if (this.state.email.length < 4) {
      this.setState({ emailError: 'Email is too short' });
      reject = true;
    }

    if (this.state.name.length < 2) {
      this.setState({ nameError: 'Name is too short' });
      reject = true;
    }

    if (this.state.surname.length < 2) {
      this.setState({ surnameError: 'Surname is too short' });
      reject = true;
    }

    if (this.state.gender.length < 2) {
      this.setState({ genderError: 'Gender is required' });
      reject = true;
    }

    if (this.state.password.length === 0) {
      this.setState({ passwordError: 'Password is too short' });
      reject = true;
    }
    if (this.state.password.length > 0 && this.state.confirmPassword !== this.state.password) {
      this.setState({ passwordError: 'Passwords mismatch', confirmPasswordError: 'Passwords mismatch' });
      reject = true;
    }


    if (reject) {
      return;
    }

    let userObject = {
      email: this.state.email,
      name: this.state.name,
      surname: this.state.surname,
      gender: this.state.gender,
      password: this.state.password
    };
    this.setState({ pendingRequestsCount: this.state.pendingRequestsCount + 1 });
    this.props.registerUser(userObject).then(() => {
      this.setState({ pendingRequestsCount: this.state.pendingRequestsCount - 1 });

      this.giveSuccessMessage('Successfully registered');
      this.props.history.push('/login');
      
    });

  };
  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ openMessage: false });
  };


  handleTextFieldChange = name => event => {
    this.setState({
      [name]: event.target.value,
      [name + 'Error']: ''
    });
  };

  render() {

    const { message, key } = this.state.messageInfo;


    return (
      <div className="contact-page-wrapper">

        <Snackbar
          key={key}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          open={this.state.openMessage}
          autoHideDuration={2000}
          onClose={this.handleClose}

          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{message}</span>}
          action={[

            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"

              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
        <BlockUi tag="div" blocking={this.state.pendingRequestsCount > 0}>
          <Grid container spacing={2} justify="center">
            <Grid item xs={12} md={10} style={{ marginTop: 10 }}>
              <Paper className="contact-page-paper">
                <Typography align="center" variant="h4" gutterBottom style={{ padding: 15 }}>
                  Create account
              </Typography>
                <Grid container spacing={2} >
                  <Grid item xs={12} lg={12} md={12} style={{ marginTop: 10 }}>
                    <TextField
                      required
                      id="Firstname"
                      label="First Name"
                      placeholder="First Name"
                      className="contact-page-name-list-field"
                      margin="normal"
                      onChange={this.handleTextFieldChange('name')}
                      error={this.state.nameError.length > 0}
                      helperText={this.state.nameError}
                    />
                  </Grid>

                  <Grid item xs={12} lg={12} md={12} style={{ marginTop: 10 }}>
                    <TextField
                      required
                      id="surname"
                      label="Surname"
                      placeholder="Surname"
                      className="contact-page-name-list-field"
                      margin="normal"
                      onChange={this.handleTextFieldChange('surname')}
                      error={this.state.surnameError.length > 0}
                      helperText={this.state.surnameError}
                    />
                  </Grid>

                  <Grid item xs={12} lg={12} md={12} style={{ marginTop: 10 }}>
                    <TextField
                      required
                      id="email"
                      label="Email"
                      placeholder="Email address"
                      className="contact-page-name-list-field"
                      margin="normal"
                      onChange={this.handleTextFieldChange('email')}
                      error={this.state.emailError.length > 0}
                      helperText={this.state.emailError}
                    />
                  </Grid>

                  <Grid item xs={12} lg={12} md={12} style={{ marginTop: 10 }}>
                    <TextField
                      required
                      id="password"
                      label="Password"
                      placeholder="Password"
                      className="contact-page-name-list-field"
                      margin="normal"
                      type="password"
                      onChange={this.handleTextFieldChange('password')}
                      error={this.state.passwordError.length > 0}
                      helperText={this.state.passwordError}
                    />
                  </Grid>



                  <Grid item xs={12} lg={12} md={12} style={{ marginTop: 10 }}>
                    <TextField
                      required
                      id="password_confirm"
                      label="Confirm Password"
                      placeholder="Confirm Password"
                      className="contact-page-name-list-field"
                      margin="normal"
                      type="password"
                      onChange={this.handleTextFieldChange('confirmPassword')}
                      error={this.state.confirmPasswordError.length > 0}
                      helperText={this.state.confirmPasswordError}
                    />
                  </Grid>


                  <Grid item xs={12} lg={12} md={12} style={{ marginTop: 10 }} >
                    <FormControl component="fieldset" required style={{
                      margin: '10px',
                      paddingLeft: 45
                    }}>
                      <FormLabel component="legend">Gender</FormLabel>
                      <RadioGroup
                        aria-label="gender"
                        name="gender"
                        required
                        value={this.state.gender}
                        onChange={this.handleTextFieldChange('gender')}
                        style={{
                          margin: `10px 0`,
                        }} className="forms-page-genderclassname">
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                      </RadioGroup>
                      <FormHelperText error={this.state.genderError.length > 0}>{this.state.genderError}</FormHelperText>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} lg={12} md={12} style={{ marginTop: 10 }}>
                    <Button type="button" color="primary" variant="outlined" onClick={this.backToHome}> Back to home screen</Button>
                    <Button type="button" color="primary" variant="contained" onClick={this.onSubmit}>Create Account</Button>

                  </Grid>


                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </BlockUi>
      </div>
    );
  }
  componentDidMount() {

  }

}



// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    
  };
};


const mapDispatchToProps = (dispatch) => ({
  registerUser: (userJson) => dispatch(registerUser(userJson))
});


export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
