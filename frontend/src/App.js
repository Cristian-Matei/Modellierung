import React, { Component } from 'react';
import { Route } from 'react-router';
import Main from './components/Main';
import Contamination from './components/Contaminations';
//import './custom.css';

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <div>
                <Route exact path = "/" component = { Main } />
                <Route path = "/contaminations" component = { Contamination } />
            </div>
        )
    }
}