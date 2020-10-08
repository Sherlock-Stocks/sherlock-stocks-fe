import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import Login from './Authorization/Login.js';
import Signup from './Authorization/Signup.js';
import Home from './Home.js';
import Header from './Header.js';
import Stock from './Stock/Stock.js';
import AboutUs from './AboutUs/Aboutus.js';

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Header />
                    <Switch>
                        <Route
                            path="/"
                            exact
                            render={(routerProps) => <Home {...routerProps} />}
                        />
                        <Route
                            path="/signup"
                            exact
                            render={(routerProps) => <Signup {...routerProps} />}
                        />
                        <Route
                            path="/login"
                            exact
                            render={(routerProps) => <Login {...routerProps} />}
                        />
                        <Route
                            path="/stock"
                            exact
                            render={(routerProps) => <Stock {...routerProps} />}
                        />
                        <Route
                            path="/aboutus"
                            exact
                            render={(routerProps) => <AboutUs {...routerProps} />}
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}