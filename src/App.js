import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';
import Login from './Authorization/Login.js';
import Signup from './Authorization/Signup.js';

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <Signup {...routerProps} />} 
                        />
                        <Route 
                            path="/login" 
                            exact
                            render={(routerProps) => <Login {...routerProps} />} 
                        />
                        {/* <Route 
                          path="/users/:myId" 
                          exact
                          render={(routerProps) => < {...routerProps} />} 
                        /> */}
                    </Switch>
                </Router>
            </div>
        )
    }
}