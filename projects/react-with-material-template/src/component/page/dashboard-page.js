import { withStyles } from '@material-ui/core/styles';
import React, { Component } from 'react';

const styles = theme => ({
    root: {
        color:'blue',
    }
});

class DashboardPage extends Component {
    render () {
        const { classes } = this.props;
        return <h1 className={classes.root}>DashboardPage</h1>;
    }
}
export default withStyles(styles)(DashboardPage);