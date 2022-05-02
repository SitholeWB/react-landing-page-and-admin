import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openLogin, closeLogin } from '../store/actions/loginActions';
import { openRegister, closeRegister } from '../store/actions/registerActions';

function PublicSideBar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const loginClick = () => {
        dispatch(openLogin())
        dispatch(closeRegister())
    }
    const registerClick = () => {
        dispatch(openRegister())
        dispatch(closeLogin())
    }
    return (
        <React.Fragment>
            <ListItemButton onClick={() => navigate('/')} >
                <ListItemIcon>
                    <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
            </ListItemButton>
            <ListItemButton onClick={() => loginClick()}>
                <ListItemIcon>
                    <PersonIcon />
                </ListItemIcon>
                <ListItemText primary="login" />
            </ListItemButton>
            <ListItemButton onClick={() => registerClick()}>
                <ListItemIcon>
                    <PersonAddIcon />
                </ListItemIcon>
                <ListItemText primary="register" />
            </ListItemButton>
        </React.Fragment>
    )
};



export default PublicSideBar;