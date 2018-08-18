import React, { Component } from 'react'
import { TextField, FormControl, InputLabel, Input } from '@material-ui/core'


export default class Form extends Component {

    render(){
        return(
            <form>
                <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="email">Email Address</InputLabel>
                    <Input id="email" name="email" autoComplete="email" autoFocus />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="email">Email Address</InputLabel>
                    <Input id="email" name="email" type="password" autoComplete="email" autoFocus />
                </FormControl>
            </form>

        )
    }
}