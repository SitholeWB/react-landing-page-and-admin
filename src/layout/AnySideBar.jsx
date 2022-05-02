import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from "react-router-dom";


function AnySideBar() {
    const navigate = useNavigate();
    return (
        <React.Fragment>
            <ListItemButton onClick={() => navigate('/view-products')}>
                <ListItemIcon>
                    <ShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary="Products" />
            </ListItemButton>
            <ListItemButton onClick={() => navigate('/on-sale')}>
                <ListItemIcon>
                    <ShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary="On Sale" />
            </ListItemButton>
        </React.Fragment>
    )
};
export default AnySideBar;