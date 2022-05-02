import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useNavigate } from "react-router-dom";

function AdminSideBar() {
    const navigate = useNavigate();
    return (
        <React.Fragment >
            <ListItemButton onClick={() => navigate('/admin/manage-products')} >
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Manage Products" />
            </ListItemButton>
            <ListItemButton onClick={() => navigate('/admin/manage-sales')}>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Manage Sales" />
            </ListItemButton>
        </React.Fragment>
    )
};
export default AdminSideBar;