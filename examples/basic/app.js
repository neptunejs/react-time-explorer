import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {TimeExplorer} from '../../src';
import data from '../../data/data';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <TimeExplorer width={1000} height={1100} data={data}></TimeExplorer>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('example')
);
