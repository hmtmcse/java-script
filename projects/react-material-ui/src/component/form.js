import React, { Component } from 'react'
import {
    Button,Paper, TextField, FormControl, InputLabel, Input,
    Card, CardContent, Typography, CardActions, CardHeader, CardMedia, Grid
} from '@material-ui/core'


export default class Form extends Component {


    render(){

        const registrationForm = (
            <form>
                <Card>
                    <CardHeader title="Registration Form"/>
                    <CardContent>

                        <Grid container spacing={8}>
                            <Grid item xs={6}><TextField label="Email Address" fullWidth required/></Grid>
                        </Grid>


                    </CardContent>
                    <CardActions>

                        <Grid container spacing={8}>
                            <Grid item xs={1}><Button color="primary" type="submit" fullWidth variant="raised" children="Save"/></Grid>
                            <Grid item xs={1}><Button color="primary" type="submit" fullWidth variant="raised" children="Cancel"/></Grid>
                        </Grid>

                    </CardActions>
                </Card>
            </form>
        );



        return registrationForm;
    }
}