
import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import MessageIcon from '@material-ui/icons/Message';

/* import your desired icon from material-ui icons library */
import { NavLink } from 'react-router-dom';


export const privateNavs = [
    {
        url: '/home',
        name: 'Home',
        icon: <HomeIcon />
    },
    {
        url: '/profile',
        name: 'My Profile',
        icon: <AccountCircleIcon />
    },
    // add new Nav links here as a json object, in this file the public navigations
];

class PrivateNavList extends React.Component {
    render() {
        return (
            privateNavs.map((navItem) => {
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
                );
            })

        )
    }
}


export default PrivateNavList;





