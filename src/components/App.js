import React, {Component} from "react";

import { Iframe } from './IFrame';

import { defaultIframeSrc } from '../constants/main';

import './App.css';

class App extends Component {
    constructor(props){
        super(props);

        console.log('here');
        this.state = {
            iframeSrc: this.getIframeSrcFromLocalStorage() || defaultIframeSrc,
        };
    }

    getIframeSrcFromLocalStorage() {
        const savedIframeSrc = localStorage.getItem('iframeSrc');

        if (savedIframeSrc === null) {
            return undefined;
        }

        return savedIframeSrc;
    }

    render() {
        console.log(this);
        debugger;
        return (
            <div>
                <Iframe src={this.state.iframeSrc} />
            </div>
        );
    }
}

export default App;