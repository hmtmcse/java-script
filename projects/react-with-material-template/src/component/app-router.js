import React, { Component } from 'react'
import {
    Route,
    BrowserRouter as Router
} from "react-router-dom";
import LoginPage from './page/login-page';
import Dashboard from './page/dashboard-page';


export default class AppRouter extends Component {

    render(){
        return (
            <Router>
                <React.Fragment>
                    <Route exact path="/" component={LoginPage} />
                    <Route path="/dashboard" component={Dashboard} />
                </React.Fragment>
            </Router>
        );
    }
}