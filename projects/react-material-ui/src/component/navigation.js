import React, { Component } from 'react'
import {
    AppBar,Toolbar, IconButton, Button, Input,
    Radio,
    Select,MenuItem, FormControlLabel, Checkbox, FormGroup, FormLabel,RadioGroup,
    Card, CardContent, Typography, CardActions, CardHeader, CardMedia, Grid
} from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';


const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

class Navigation extends Component {


    render(){


        const { classes } = this.props;

        const appBarWithAvatar = (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            News
                        </Typography>
                        <IconButton
                            color="inherit" >
                            <AccountCircle />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </div>
        );

        const appBarWithButtons = (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            News
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </div>
        );

        return appBarWithAvatar;
    }
}

Navigation.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigation);