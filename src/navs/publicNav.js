
import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import HomeIcon from '@material-ui/icons/Home';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PhoneIcon from '@material-ui/icons/Phone';

/* import your desired icon from material-ui icons library */
import { NavLink } from 'react-router-dom';


export const publicNavs = [
    {
        url: '/home',
        name: 'Home',
        icon: <HomeIcon />
    },
    {
        url: '/login',
        name: 'Login',
        icon: <VpnKeyIcon />
    },
    {
        url: '/register',
        name: 'Register',
        icon: <PersonAddIcon />
    },
    {
        url: '/contact',
        name: 'Contact Us',
        icon: <PhoneIcon />
    },
    // add new Nav links here as a json object, in this file the public navigations
];

class PublicNavList extends React.Component {
    render() {
        return publicNavs.map((navItem) => {
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
    }
}

export default PublicNavList;





