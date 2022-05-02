import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AdminSideBar from './layout/AdminSideBar';
import PrivateSideBar from './layout/PrivateSideBar';
import PublicSideBar from './layout/PublicSideBar';
import AnySideBar from './layout/AnySideBar';
import AppRouter from './layout/AppRouter';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

import { openLogin, closeLogin } from './store/actions/loginActions';
import { openRegister, closeRegister } from './store/actions/registerActions';
import { logout } from './store/actions/authActions';
import { setSnackBarOpen } from './store/actions/snackBarActions';
import { Snackbar } from '@mui/material';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();

function DashboardContent(props) {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginClick = () => {
    dispatch(openLogin())
    dispatch(closeRegister())
  }
  const registerClick = () => {
    dispatch(openRegister())
    dispatch(closeLogin())
  }
  const logoutClick = () => {
    dispatch(logout())
    navigate('/')
  }

  let loginRegisterWidth = '54px';
  if (open) {
    loginRegisterWidth = '5px';
  }
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              My Admin and Landing Page Web Application
            </Typography>
            {!props.isAuthenticated &&
              <Typography>
                <Button color="inherit" onClick={() => loginClick()}>Login</Button>
                <Button color="inherit" onClick={() => registerClick()}>Register</Button>
              </Typography>
            }
            {props.isAuthenticated &&
              <Typography>
                <Button color="inherit" onClick={() => logoutClick()}>Logout</Button>
                <IconButton color="inherit">
                  <Badge badgeContent={4} color="secondary">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
              </Typography>
            }


          </Toolbar>
          {(props.loginOpen && !props.registerOpen) &&
            <div style={{ position: 'sticky', backgroundColor: "white" }} >
              <div style={{ position: 'sticky', marginLeft: loginRegisterWidth, backgroundColor: "white" }}>
                <LoginPage />
              </div>
            </div>
          }
          {(props.registerOpen && !props.loginOpen) &&
            <div style={{ position: 'sticky', backgroundColor: "white" }} >
              <div style={{ position: 'sticky', marginLeft: loginRegisterWidth, backgroundColor: "white" }}>
                <RegisterPage />
              </div>
            </div>
          }
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {!props.isAuthenticated && (
              <React.Fragment>
                <PublicSideBar />
                <Divider sx={{ my: 1 }} />
              </React.Fragment>
            )}

            {props.isAuthenticated && (
              <React.Fragment>
                <PrivateSideBar />
                <Divider sx={{ my: 1 }} />
              </React.Fragment>
            )}

            {<AnySideBar />}
            <Divider sx={{ my: 1 }} />

            {props.tokenObject && props.tokenObject?.role?.includes('ADMIN') && (
              <React.Fragment>
                <AdminSideBar />
                <Divider sx={{ my: 1 }} />
              </React.Fragment>
            )}

          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <AppRouter />
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider >
  );
}

function Main(props) {
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <Snackbar
        open={props.snackBarOpen}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        autoHideDuration={2000}
        onClose={() => dispatch(setSnackBarOpen(false, ''))}
        message={props.snackBarMessage}
      />
      <DashboardContent {...props} />
    </React.Fragment>);
}

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    isAuthenticated: state.authReducer?.tokenObject !== null,
    tokenObject: state.authReducer?.tokenObject,
    loginOpen: state.loginReducer.open,
    registerOpen: state.registerReducer.open,
    snackBarMessage: state.snackBarReducer.message,
    snackBarOpen: state.snackBarReducer.open,
  };
};

export default connect(mapStateToProps)(Main);