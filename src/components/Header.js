import React from 'react';
import AppBar from '@material-ui/core/AppBar';

import { connect } from 'react-redux';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import PublicNavList from '../navs/publicNav';
import PrivateNavList from '../navs/privateNav';
import ExpandNavList from '../navs/expandNavs'
import AdminNavList from '../navs/adminNav'
import SuperAdminNavList from '../navs/superAdminNav'
import { logout } from '../store/actions/authActions';


class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 1, open: false,
      componentsmenuopen: false
    };

  }

  handleChange = (event, index, value) => this.setState({ value });
  onLeftIconButtonClick = (event, index, value) => {
    this.setState({ open: !this.state.open });
  };

  toggleDrawer = (open) => () => {
    this.setState({
      open: open,
    });
  };

  handleClick = () => {
    this.setState({ componentsmenuopen: !this.state.componentsmenuopen });
  };

  handleClose = event => {
    if (this.target1.contains(event.target) || this.target2.contains(event.target)) {
      return;
    }
    this.setState({ componentsmenuopen: false });
  };
  conditRenderEssential = () => this.props.tokenObject ? (
    <div>
      <Button component={Link} to="/profile"><AccountCircleIcon />{this.props.tokenObject.name}</Button>
      <Button color="inherit" align="right" onClick={this.props.startLogout}> Logout</Button>
    </div>
  ) :
    (
      <div>
        <Button color="inherit" align="right"><Link to="/login"> Login</Link></Button>
        <Button color="inherit" align="right"><Link to="/register"> Register</Link></Button>
      </div>
    )

  render() {

    return (
      <div>
        <Drawer open={this.state.open} onClose={this.toggleDrawer(false)} >
          <div tabIndex={0} role="button">
            <div className="sidelistwrapper">

              {!this.props.tokenObject && (
                <React.Fragment>
                  <PublicNavList />
                 { 
                 //<ExpandNavList />
                 }
                </React.Fragment>)}

              {/*start if testing*/}

              {this.props.tokenObject && (
                <React.Fragment>
                  <PrivateNavList />
                </React.Fragment>
              )}
              {/* end of testing */}

              {this.props.tokenObject && this.props.tokenObject.role.includes('ADMIN') && (
                <React.Fragment>
                  <AdminNavList />
                </React.Fragment>
              )}

              {this.props.tokenObject && this.props.tokenObject.role.includes('SUPER_ADMIN') && (
                <React.Fragment>
                  <SuperAdminNavList />
                </React.Fragment>
              )}

            </div>
          </div>
        </Drawer>
        <div className="appbarwrapper">

          <AppBar position="static">
            <Toolbar>
              <IconButton className="iconbuttonsyle" color="inherit" aria-label="Menu" onClick={() => this.onLeftIconButtonClick()}>
                <MenuIcon />
              </IconButton>
              <Typography variant="h5" color="inherit" className="headertypoclass" >
                Landing Page and Admin
              </Typography>

              {
                this.conditRenderEssential()
              }
              <Link to="/"> <HomeIcon /></Link>
            </Toolbar>
          </AppBar>
        </div>
      </div>
    );
  };
}

const mapStateToProps = (state) => ({
  tokenObject: state.authReducer.tokenObject
});

const mapDispatchToProps = (dispatch, props) => ({
  startLogout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);