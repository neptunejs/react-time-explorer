import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {TimeExplorer} from '../../src';

const App = class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <TimeExplorer></TimeExplorer>
            </div>
        );
    }
};

ReactDOM.render(
    <App />,
    document.getElementById('example')
);
