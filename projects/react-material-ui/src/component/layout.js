import React, { Component } from 'react'
import {
    Button,Paper, TextField, FormControl, InputLabel, Input,
    Card, CardContent, Typography, CardActions, CardHeader, CardMedia, Grid
} from '@material-ui/core'

export default class Layout extends Component {

    render(){

        const gridSystem = (
            <div>
                <Grid container spacing={8}>
                    <Grid item xs={12}><Paper> XS 12 </Paper> </Grid>
                    <Grid item xs={6}><Paper>XS 6</Paper></Grid>
                    <Grid item xs={6}><Paper>XS 6</Paper></Grid>
                    <Grid item xs={3}><Paper>XS 3</Paper></Grid>
                    <Grid item xs={3}><Paper>XS 3</Paper></Grid>
                    <Grid item xs={3}><Paper>XS 3</Paper></Grid>
                    <Grid item xs={3}><Paper>XS 3</Paper></Grid>
                </Grid>
            </div>
        );


        return gridSystem
    }
}