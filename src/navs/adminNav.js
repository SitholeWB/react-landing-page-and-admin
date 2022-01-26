
import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from "prop-types";
import SettingsIcon from '@material-ui/icons/Settings';
import ExtensionIcon from '@material-ui/icons/Extension';
import PhoneIcon from '@material-ui/icons/Phone';

/* import your desired icon from material-ui icons library */
import { NavLink } from 'react-router-dom';


export const adminNavs = [
    {
        url: '/venues',
        name: 'Venues',
        icon: <SettingsIcon style={{ color: 'orange' }} />
    },

    // add new Nav links here as a json object, in this file the public navigations
];

class AdminNavList extends React.Component {
    render() {
        return (
            adminNavs.map((navItem) => {
                return (
                    <NavLink to={navItem.url} className="NavLinkItem" key={navItem.url} activeClassName="NavLinkItem-selected">
                        <List component="nav" >
                            <ListItem button>
                                <ListItemIcon className="innernavitem">
                                    {navItem.icon}
                                </ListItemIcon>
                                <ListItemText primary={navItem.name} className="innernavitem" color="black" />
                            </ListItem>
                        </List>
                    </NavLink>
                )
            })

        )
    }
}


export default AdminNavList;





