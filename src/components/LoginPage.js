import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Key from '@material-ui/icons/VpnKey';
import Button from '@material-ui/core/Button';

//block ui
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';

//redux
import { connect } from 'react-redux';
import { getToken } from '../store/actions/authActions';

export class LoginPage extends React.Component {

  state = {
    pendingRequestsCount: 0,
    email: '',
    emailError: '',
    password: '',
    passwordError: ''
  }

  OnClickLogin = () => {
    let reject = false;
    if (this.state.email.length < 4) {
      this.setState({ emailError: 'Email is too short' });
      reject = true;
    }

    if (this.state.password.length === 0) {
      this.setState({ passwordError: 'Password is too short' });
      reject = true;
    }

    if (reject) {
      return;
    }

    this.setState({ pendingRequestsCount: this.state.pendingRequestsCount + 1 });
    this.props.startLogin('id-any', this.state.email, this.state.password).then(() => {
      this.setState({ pendingRequestsCount: this.state.pendingRequestsCount - 1 });
      this.props.history.push('/home');      
    });

  };

  handleEmailTextFieldChange = (event, name) => {
    this.setState({
      [name]: event.target.value,
      emailError: ''
    });
  };

  handlePasswordTextFieldChange = (event, name) => {
    this.setState({
      [name]: event.target.value,
      passwordError: ''
    });
  };


  render() {
    if (this.props.tokenObject !== null) {
      this.props.history.push('/home');
    }

    return (
      <div className="login-page-class">
        <BlockUi tag="div" blocking={this.state.pendingRequestsCount > 0}>
          <Paper className="loginPaper">
            <div className="loginheaderpart">
              <Typography variant="h6" gutterBottom className="loginpageheader">
                Login
            </Typography>
            </div>
            <Typography variant="h4" component="h3">
              Login to your account
          </Typography>

            <form>
              <div className="loginformgroup">
                <AccountCircle />
                <TextField
                  required
                  id="input-email"
                  label="email"
                  error={this.state.emailError.length > 0}
                  helperText={this.state.emailError}
                  onChange={(event) => this.handleEmailTextFieldChange(event, 'email' )}
                />
                <span style={{color: 'red', fontStyle: 'italic'}}>Any random email will work for this demo</span>
              </div>

              <div className="loginformgroup">
                <Key />
                <TextField
                  required
                  type="password"
                  id="input-password"
                  label="Password"
                  error={this.state.passwordError.length > 0}
                  helperText={this.state.passwordError}
                  onChange={(event)=>this.handlePasswordTextFieldChange(event, 'password')}
                />
                <span style={{color: 'red', fontStyle: 'italic'}}>Any random password will work for this demo</span>
              </div>
            </form>

            <Button color="primary" component={Link} to="/register" onClick={() => this.onRegisterClick()}>
              Register
          </Button>
            <Button variant="outlined" color="primary" onClick={() => this.OnClickLogin()}>
              Login
          </Button>
          </Paper>
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
    tokenObject: state.authReducer.tokenObject,
  };
};


const mapDispatchToProps = (dispatch) => ({
  startLogin: (universityId, email, password) => dispatch(getToken(universityId, email, password))
});


export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);