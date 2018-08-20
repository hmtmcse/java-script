import React, { Component } from 'react';
import classNames from 'classnames';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {
    CssBaseline, Paper, Avatar, Typography, FormControl, InputLabel, Input, Button,
    withStyles, AppBar, Toolbar, IconButton, Badge, Drawer, Divider, List
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import PropTypes from 'prop-types';
import NavigationElement from './../element/navigation-element';

const drawerWidth = 240;
const styles = theme => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing.unit * 7,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 9,
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        height: '100vh',
        overflow: 'auto',
    },
    chartContainer: {
        marginLeft: -22,
    },
    tableContainer: {
        height: 320,
    }
});

class DashboardPage extends Component {

    state = {
        open: true,
    };

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    render () {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <CssBaseline/>
                <div className={classes.root}>
                    <AppBar position="absolute" className={classNames(classes.appBar, this.state.open && classes.appBarShift)}>
                        <Toolbar disableGutters={!this.state.open} className={classes.toolbar}>
                            <IconButton
                                color="inherit"
                                onClick={this.handleDrawerOpen}
                                className={classNames(classes.menuButton,this.state.open && classes.menuButtonHidden)}>
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="title" color="inherit" noWrap className={classes.title}>
                                Dashboard
                            </Typography>
                            <IconButton color="inherit">
                                <Badge badgeContent={4} color="secondary">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    <Drawer variant="permanent" classes={{paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose)}}>
                        <div className={classes.toolbarIcon}>
                            <IconButton onClick={this.handleDrawerClose}>
                                <ChevronLeftIcon />
                            </IconButton>
                        </div>
                        <Divider />
                        <List><NavigationElement/></List>
                    </Drawer>
                    <main className={classes.content}>
                        <div className={classes.appBarSpacer}/>
                        <Typography variant="display1" gutterBottom>
                            Orders
                        </Typography>
                        <Typography component="div">

                        </Typography>
                        <Typography variant="display1" gutterBottom>
                            Products
                        </Typography>
                        <div className={classes.tableContainer}>

                        </div>
                    </main>
                </div>
            </React.Fragment>
        );
    }
}

DashboardPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DashboardPage);